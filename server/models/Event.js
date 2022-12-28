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

});

eventSchema.methods.generateAuthToken = function() {
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
        category: Joi.string().required().label("Category"),
        date: Joi.date().required().label("Date"),
        requirementFunds: Joi.string().required().label("RequirementFunds"),
        organization_id: Joi.string().required().label("organization_id"),
    });
    return schema.validate(data);
};

module.exports = { Event, validateEvent };