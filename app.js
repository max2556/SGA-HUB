//Получаем установленный пакет "express", часто используемый для Node.js приложений
//Делаем это с помощью глобальной Node js функции require
const express = require("express");
const config = require('config'); //Переменные получаются из config(название пакета) файла. Всё также используем require
const mongoose = require('mongoose');
const path = require("path");

const PORT = config.get('port') || 2200;
const MONGO_URI = config.get('mongo-uri');

const app = express(); //App - по сути наш сервер, создается этим самым Express'ом.
app.use(express.json({ extended: true }))

app.use("/api/auth", require("./routes/auth.routes")); //Для обращений с тэгом(?) api/auth используем созданный роутер 
app.use("/api/links", require("./routes/link.routes"));
app.use("/S/", require("./routes/redirect.routes"));


/*Условие для работы финального приложения */
if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client", "build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


//Что такое async?
async function start() {
    try {
        //И что такое await?
        //Но, в прочем, здесь мы пытаемся подключиться к базе данных
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log("Сервер запущен на порте " + PORT)); //Если подключились и ничего не сломалось - запускаем сервер
    } catch (e) {
        console.log("Серверная ошибка: " + e.message);
        process.exit(1); //Если что-то пошло не так - обрываем процесс с кодом 1
    }
}

start();