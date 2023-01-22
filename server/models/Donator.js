const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const donatorSchema = new mongoose.Schema({
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    date: {type: Date, required: true, default: Date.now},
    event : {type: String, required:true}
});

donatorSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
    });
    return token;
};

const Donator = mongoose.model("donator", donatorSchema);


const validateDonator = (data) => {
    const schema = Joi.object({
        
        email: Joi.string().email().required().label("Email"),
        events: Joi.string().required().label("Event"),

    });
    return schema.validate(data);
};

module.exports = { Donator, validateDonator };