require("dotenv").config();
const router = require("express").Router();
const {
  News,
  validateNews,
} = require("../models/Newsletter");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const ObjectId = require("mongodb").ObjectID;

/*************************************************************************************** */

router.post("/", async (req, res) => {

  try {
    const { validationError } = validateNews(req.body);
    if (validationError) {
      console.log(validationError);
      res.status(400).send({ message: validationError.details[0].message });
    }

    const newsUser = await News.findOne({ email: req.body.email });
    console.log("ssssss")
    // console.log(organization)

    if (newsUser) {
      return res.status(409).send({ message: "User alredy exist" });
    } else {
      let news = new News(req.body);
      await news.save();
    }


  } catch (errors) {
    res.status(500).send({ message: "Internal Server Error", error: errors });
    console.log(errors);
  }
});

module.exports = router;
