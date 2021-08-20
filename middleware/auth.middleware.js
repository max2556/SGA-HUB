const jwt = require("jsonwebtoken");
const config = require("config");


//В общем и целом, данный middleware является прослойкой, проверяющей авторизацию
module.exports = (req, res, next) => {
    const storageName = "userData";

    if (req.method === "OPTIONS") return next();
    try {
        const token = req.headers.authorization.split(" ")[1]; //headers.authorization обычно выглядит так: "Something TOKEN", поэтому делим строку на 2 строки и берем 2-ю
        if (!token) {
            return res.status(401).json({ message: "Ошибка авторизации" });
        }

        const decoded = jwt.verify(token, config.get("jwtSecretKey")); //Если всё в порядке, т.е. jwt верифицировал наш токен - то сохраняем его в запросе 'req' для последующего использования во всех методах
        req.user = decoded;
        next(); //Переход на следующий метод

    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так в Auth.Middleware. Ошибка авторизации", name: e.name });
        console.log("Что-то пошло не так в Auth.Middleware");
    }
}