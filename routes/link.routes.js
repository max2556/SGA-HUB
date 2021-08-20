const { Router } = require("express");
const router = Router();
const Link = require("../models/Link");
const auth = require("../middleware/auth.middleware");
const config = require("config");
const shortId = require("shortid");

/*
router.Method(URL, MiddleWare, MainFunction)
*/

/*Link выглядит так: 
{
    originalLink: { type: String, required: true }, - изначальная ссылка
    shortenLink: { type: String, required: true, unique: true }, - наша, укороченная ссылка
    linkCode: { type: String, required: true, unique: true }, - личный код(id) ссылки
    creationDate: { type: Date, default: date.now }, //дата создания
    redirectionCount: { type: Number, default: 0 }, //Количество переходов
    ownerId: { type: Types.ObjectId, ref: "User" } //Создатель
}


*/




//Генерирует и публикует в базу данных новую ссылку
//          api/links/generate
router.post("/generate", auth, async(req, res) => {
    try {
        const baseUrl = config.get("baseUrl");
        //Должен получить из body originalLink
        const { originalLink } = req.body;

        const linkCode = shortId.generate();

        //Не забывать, что работа с базой - через асинхронные функции
        const existing = await Link.findOne({ originalLink });
        if (existing) {
            return res.json({ link: existing });
        }

        const shortenLink = baseUrl + "/S/" + linkCode;
        const ownerId = req.user.userId;

        const link = new Link({
            originalLink,
            shortenLink,
            linkCode,
            ownerId
        });
        await link.save();
        res.status(201).json({ link });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что-то пошло не так при генерации ссылки" })
    }
});

//Метод ищет все ссылки
//          api/links/
router.get("/", auth, async(req, res) => {
    try {
        const links = await Link.find({ ownerId: req.user.userId }); //Благодаря auth, в req присутствует user
        res.json(links);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что-то пошло не так при получении списка ссылок" })
    }
});

//Метод ищет ссылку по id
//          api/links/:id
router.get("/:id", auth, async(req, res) => {
    try {
        const link = await Link.findById(req.params.id);
        res.json(link);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что-то пошло не так при получении ссылки с id:" + req.params.id })
    }
});



module.exports = router;