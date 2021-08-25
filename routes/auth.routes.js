//Основа роутера:
//1 - Подключаем Router из Express'a: const {Router} = require("express");
//2 - создаем модель роутера: const router = Router();
//3 - экспортируем наш роутер: module.exports = router;

const { Router } = require("express"); //1
const router = Router(); //2

const User = require("../models/User.js"); //Беру модель пользователя для базы данных


const { check, validationResult } = require("express-validator"); //Подключаю express-validator
const bcrypt = require("bcryptjs"); //Подключаю библиотеку для создания хешей
const jwt = require("jsonwebtoken"); //Подключаю библиотеку для JSON web Token'ов(А что это?)
const config = require("config"); //Подключаю старый добрый конфиг

let cryptSalt = 12; //Соль для хеша. Узнать что сюда подходит, а что нет. Раньше была строка - не подошла


// api/auth/register
router.post("/register",
    //MiddleWare
    [ //В этом массиве описываются проверки данных с frontEnd'a, в данном случае, для регистрации мы проверяем Email и пароль
        check("email", "Некорректный адрес электронной почты").isEmail(),
        check("password", "Не соблюдены минимальные требования к паролю").isLength({ min: 6 }),
        check("nickname", "Имя слишком длинное/короткое").isLength({ min: 3, max: 20 })
    ],
    async(req, res) => {
        try {
            //console.log("Body:", req.body);


            const errors = validationResult(req); //Проверяем request на наличие ошибок, описанных в массиве выше
            //Если список не пуст - вернуть ошибку
            //Ууу, сука Errors.isEmpty() - это метод!, писать errors.isEmpty - ошибка, в нем нет такого поля
            if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array(), message: "Ошибка при регистрации - некоректные данные" }); }

            const { email, password, nickname } = req.body; //Получаем из request'a емаил и пароль
            const candidate_email = await User.findOne({ email: email }); //Проверяем, есть ли уже в базе такой емаил
            const candidate_nickname = await User.findOne({ nickname: nickname });


            if (candidate_email) return res.status(400).json({ message: "Пользователь с таким Email'ом уже существует" }); //Если да - выдать ошибку
            if (candidate_nickname) return res.status(400).json({ message: "Пользователь с таким именем уже существует" });


            const hashedPassword = await bcrypt.hash(password, cryptSalt);
            const user = new User({ email: email, password: hashedPassword, nickname: nickname });

            await user.save();
            res.status(201).json({ message: "Пользователь успешно создан" });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Что-то пошло не так" })
        }
    });

// api/auth/login
router.post("/login", [
        //В этом массиве описываются проверки данных с frontEnd'a, в данном случае, для регистрации мы проверяем Email и пароль
        //Проверки есть разные, поставляются вместе с express-validator
        check("email", "Некорректный адрес электронной почты").isEmail(),
        check("password", "Введите пароль!").exists()
    ],
    async(req, res) => {
        try {

            const errors = validationResult(req); //Проверяем request на наличие ошибок, описанных в массиве выше
            //Если список не пуст - вернуть ошибку
            if (!errors.isEmpty) { return res.status(400).json({ errors: errors.array(), message: "Ошибка при логине - некоректные данные" }) }

            const { email, password } = req.body; //Получаем из request'a емаил и пароль
            const user = await User.findOne({ email: email }); //Проверяем, есть ли уже в базе такой емаил

            if (!user) return res.status(400).json({ message: "Данного Email'a нет в базе" }); //Если нет, то как мы можем логиниться?

            const isMatch = await bcrypt.compare(password, user.password); //Проверяет совпадают ли пароли
            if (!isMatch) return res.status(400).json({ message: "Пароли не совпадают" });


            const token = jwt.sign({ userId: user.id },
                config.get("jwtSecretKey"), { expiresIn: "2h" }
            );

            res.json({ token, userId: user.id });

        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так при логине" })
        }
    });


module.exports = router; //3