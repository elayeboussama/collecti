require("dotenv").config();
const router = require("express").Router();
const { Donator, validateDonator } = require("../models/Donator");
const { Event } = require("../models/Event");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const Joi = require("joi");
const ObjectId = require('mongodb').ObjectID;

/*************************************************************************************** */


router.post("/", async(req, res) => {
    try {
        console.log(req.body)
        
        let donate = new Donator(req.body);
        await donate.save();

        const event = await Event.updateOne({_id:req.body.event},{$inc: {donators:1, raisedMoney: req.body.amount}})
        
        res.status(200).send({ message: "Donation succeed" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)
    }
})

router.get("/gettAll", async(req, res) => {
    try {
        
        const donates = await Donator.find()

       
        
        res.status(200).send({donates:donates, message: "Donation succeed" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)
    }
})




module.exports = router;