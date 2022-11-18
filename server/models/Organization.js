const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const organizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    events: { type: Array, required: true },
    directorName: { type: String, required: true },
    logo: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    phone: { type: String, required: true },
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
        description: Joi.string().required().label("Description"),
        directorName: Joi.string().required().label("DirectorName"),
        logo: Joi.string().required().label("Logo"),
        namcatchPhrase: Joi.string().required().label("CatchPhrase"),
        phone: Joi.string().required().label("Phone"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        events: Joi.array().required().label("Events"),
    });
    return schema.validateOrganization(data);
};

module.exports = { Organization, validateOrganization };