const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    requirementFunds: { type: String, required: true },
    organization_id: { type: String, required: false },
    image: { type: Object, required: false },
    catchphrase: { type: String, required: false }

});

eventSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
    });
    return token;
};

const Event = mongoose.model("event", eventSchema);


const validateEvent = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        description: Joi.string().required().label("Description"),
        category: { type: Array, required: true },
        date: Joi.date().required().label("Date"),
        requirementFunds: Joi.string().required().label("RequirementFunds"),
        organization_id: Joi.string().label("organization_id"),
        image: { type: String, required: false },
        catchphrase: Joi.string().label("catchphrase"),
    });
    return schema.validate(data);
};

module.exports = { Event, validateEvent };