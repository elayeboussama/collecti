const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const newsSchema = new mongoose.Schema({
    email: { type: String, required: true },

});

newsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
    });
    return token;
};

const News = mongoose.model("news", newsSchema);


const validateNews = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
    });
    return schema.validate(data);
};

module.exports = { News, validateNews };