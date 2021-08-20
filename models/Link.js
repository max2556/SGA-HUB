const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    originalLink: { type: String, required: true }, //Изначальная ссылка
    shortenLink: { type: String, required: true, unique: true }, //Наша, укороченная ссылка
    linkCode: { type: String, required: true, unique: true }, //Личный код(id) ссылки
    creationDate: { type: Date, default: Date.now }, //Дата создания ссылки
    redirectionCount: { type: Number, default: 0 }, //Количество переходов по ссылке
    ownerId: { type: Types.ObjectId, ref: "User" } //Обладатель
});

module.exports = model('Link', schema);