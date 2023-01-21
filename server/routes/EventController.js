require("dotenv").config();
const router = require("express").Router();
const { Event, validateEvent } = require("../models/Event");
const { Organization } = require("../models/Organization");
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





/*************************************************************************************** */




router.post("/create", authenticateToken, async (req, res) => {
    try {

        const { validationError } = validateEvent(req.body);
        if (validationError) {
            console.log(validationError)
            res.status(400).send({ message: validationError.details[0].message });
        }

        let event = new Event(req.body);
        await event.save();
        await Organization.updateOne({ _id: req.user }, { $push: { events: event._id } });
        res.status(201).send({ message: "Event created successfully", id: event._id });

    } catch (error) {

        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)
    }
});


router.post("/delete", authenticateToken, async (req, res) => {
    try {
        await Event.deleteOne({ _id: req.body._id });
        res.status(200).send({ message: "Event deleted" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
    }
})

router.post("/update", authenticateToken, async (req, res) => {
    try {
        console.log(req.body)
        const event = await Event.findOne({ "_id": req.body._id });
        console.log("eeeee", event)
        await Event.updateOne({ "_id": ObjectId(req.body._id) }, { $set: req.body });
        res.status(200).send({ message: "Event updated" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)
    }
})

router.post("/donate", async (req, res) => {
    try {
        console.log(req.body)
        const event = await Event.findOne({ "_id": req.body._id });
        console.log("eeeee", event)
        await Event.updateOne({ "_id": ObjectId(req.body._id) }, { $set: req.body });
        res.status(200).send({ message: "Event updated" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)
    }
})



router.get("/events", async (req, res) => {
    try {
        const events = await Event.find();


        if (events) {

            res.status(201).send({ event: events, message: "Events found" });

        } else {

            res.status(404).send({ message: "Events Not Found" });

        }

    } catch (error) {

        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)


    }
})

router.post("/events", async (req, res) => {
    try {
        const events = await Event.find({ _id: { $in: req.body.events } });



        if (events) {

            res.status(201).send({ event: events, message: "Events found" });

        } else {

            res.status(404).send({ message: "Events Not Found" });

        }

    } catch (error) {

        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)


    }
})

router.get("/event/:id", async (req, res) => {
    try {
        const event = await Event.findOne({ _id: req.params['id'] });

        if (event) {

            res.status(201).send({ event: event, message: "Event found" });

        } else {

            res.status(404).send({ message: "Event Not Found" });

        }

    } catch (error) {

        res.status(500).send({ message: "Internal Server Error", error: error });
        console.log(error)


    }
})









module.exports = router;