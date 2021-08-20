const { Router } = require("express");
const router = Router();
const Link = require("../models/Link");

/*Link выглядит так: 
{
    originalLink: { type: String, required: true }, - изначальная ссылка
    shortenLink: { type: String, required: true, unique: true }, - наша, укороченная ссылка
    linkCode: { type: String, required: true, unique: true }, - личный код(id) ссылки
    creationDate: { type: Date, default: date.now }, //дата создания
    redirectionCount: { type: Number, default: 0 }, //Количество переходов
    ownerId: { type: Types.ObjectId, ref: "User" } //Создатель
}*/


router.get("/:id", async(req, res) => {
    try {
        const link = await Link.findOne({ linkCode: req.params.id });
        link.redirectionCount += 1;
        link.save();
        res.redirect(link.originalLink);
    } catch (e) {
        console.log(e);
    }
})


module.exports = router;