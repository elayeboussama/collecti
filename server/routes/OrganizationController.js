require("dotenv").config();
const router = require("express").Router();
const {
  Organization,
  validateOrganization,
} = require("../models/Organization");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const ObjectId = require("mongodb").ObjectID;

var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' }); //setting the default folder for multer


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const decoded = jwt.decode(token);
  //console.log(req.body.headers)
  // console.log(token)
  //console.log(decoded)
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
}

const loginValidate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

/*************************************************************************************** */

router.post("/login", async (req, res) => {
  try {
    const { validationError } = loginValidate(req.body);
    if (validationError) {
      console.log(validationError);
      res.status(400).send({ message: validationError.details[0].message });
    }

    const organization = await Organization.findOne({ email: req.body.email });

    // console.log(organization)

    var token = null;
    if (organization) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        organization.password
      );
      if (!validPassword)
        return res.status(401).send({ message: "Invalid Password" });

      token = await organization.generateAuthToken();

      organization.password = undefined;
      res.status(200).send({
        data: { organization, token },
        message: "logged in successfully",
      });
    } else {
      return res.status(404).send({ message: "No User Found" });
    }

    console.log(organization);
    // console.log(organization.generateAuthToken())
  } catch (errors) {
    res.status(500).send({ message: "Internal Server Error", error: errors });
    console.log(errors);
  }
});

router.post("/create", async (req, res) => {
  try {

    const org = await Organization.findOne({ email: req.body.email })
    console.log(org)
    if (org == null) {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      console.log(req.body);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      await new Organization({ ...req.body, password: hashPassword }).save();
      res.status(201).send({ message: "Organization created successfully" });
    } else {
      res.status(409).send({ message: "Email already exists!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});

router.post("/delete", authenticateToken, async (req, res) => {
  try {
    await Organization.deleteOne({ _id: req.body._id });
    res.status(200).send({ message: "Organization deleted" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
  }
});

router.post("/update", authenticateToken, async (req, res) => {
  try {
    console.log(req.body);
    const organization = await Organization.findOne({ _id: req.body._id });
    console.log("eeeee", organization);
    await Organization.updateOne(
      { _id: req.body._id },
      { $set: req.body }
    );
    res.status(200).send({ message: "Organization updated" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});

router.get("/organizations", async (req, res) => {
  try {
    const organizations = await Organization.find();

    if (organizations) {
      console.log();
      res
        .status(201)
        .send({ organization: organizations, message: "Organizations found" });
    } else {
      res.status(404).send({ message: "Organizations Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});

router.post("/organizations", async (req, res) => {
  try {
    const organizations = await Organization.find({
      _id: { $in: req.body.organizations },
    });

    if (organizations) {
      res
        .status(201)
        .send({ organization: organizations, message: "Organizations found" });
    } else {
      res.status(404).send({ message: "Organizations Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});

router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const organization = await Organization.findOne({ _id: req.params["id"] });

    if (organization) {
      res
        .status(201)
        .send({ organization: organization, message: "Organization found" });
    } else {
      res.status(404).send({ message: "Organization Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});




router.post('/upload',upload.single('fileData'), (req, res,next) => {
  console.log(req.file);//this will be automatically set by multer
  console.log(req.body);
  //below code will read the data from the upload folder. Multer     will automatically upload the file in that folder with an  autogenerated name
  fs.readFile(req.file.path,(err, contents)=> {
   if (err) {
   console.log('Error: ', err);
  }else{
   console.log('File contents ',contents);
  }
 });
});


module.exports = router;
