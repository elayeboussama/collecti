require("dotenv").config();
const router = require("express").Router();
const { Donator, validateDonator } = require("../models/Donator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const Joi = require("joi");
const ObjectId = require('mongodb').ObjectID;


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const decoded = jwt.decode(token)
        //console.log(req.body.headers)
        // console.log(token)
        //console.log(decoded)
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403)
        req.user = decoded
        next()
    })
}

const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};



/*************************************************************************************** */




router.post("/signup", async(req, res) => {
    try {
        
        const { validationError } = validateDonator(req.body);
        if (validationError) {
            console.log(validationError)
            res.status(400).send({ message: validationError.details[0].message });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        console.log(req.body)
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new Donator({...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "Donator created successfully" });

    } catch (error) {

        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)


    }
})


router.post("/login", async(req, res) => {
    try {
        const { error } = loginValidate(req.body);
        if (error) {
            console.log(error)
            res.status(400).send({ message: error.details[0].message });
        }

        const admin = await Donator.findOne({ email: req.body.email });


        var token = null
        if (admin) {
            const validPassword = await bcrypt.compare(
                req.body.password,
                admin.password
            );
            if (!validPassword)
                return res.status(401).send({ message: "Invalid Password" });

            token = admin.generateAuthToken();
        }

        res.status(200).send({ data: token, message: "logged in successfully" });

    } catch (errors) {

        res.status(500).send({ message: "Internal Server Error", error: errors });
        console.log(errors)


    }
})



router.post("/delete", authenticateToken, async(req, res) => {
    try {
        await Donator.deleteOne({ _id: req.body._id });
        res.status(200).send({ message: "Donator deleted" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
    }
})

router.post("/update", authenticateToken, async(req, res) => {
    try {
        console.log(req.body)
        const donator = await Donator.findOne({ "_id": req.body.data._id });
        console.log("eeeee", donator)
        await Donator.updateOne({ "_id": ObjectId(req.body.data._id) }, { $set: req.body.data });
        res.status(200).send({ message: "Donator updated" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)
    }
})



module.exports = router;