const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const organizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    events: { type: Array, required: false },
    directorName: { type: String, required: false },
    logo: { type: String, required: false },
    cover: { type: String, required: false },
    catchPhrase: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },

});

organizationSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
    });
    return token;
};

const Organization = mongoose.model("organization", organizationSchema);


const validateOrganization = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        description: Joi.string().label("Description"),
        directorName: Joi.string().label("DirectorName"),
        logo: Joi.string().label("Logo"),
        cover: Joi.string().label("Logo"),
        namcatchPhrase: Joi.string().label("CatchPhrase"),
        phone: Joi.string().label("Phone"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        events: Joi.array().label("Events"),
    });
    return schema.validate(data);
};

module.exports = { Organization, validateOrganization };