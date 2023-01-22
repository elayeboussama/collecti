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

const path = require('path')
var fs = require('fs');
var multer = require('multer');
const { createBrotliCompress } = require("zlib");
// var upload = multer({ dest: 'uploads/' }); //setting the default folder for multer


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

    const organizationUpdated = await Organization.findOne({ _id: req.body._id });
    organizationUpdated.password = undefined;
    res.status(200).send({ organizationUpdated: organizationUpdated, message: "Organization updated" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});

router.post("/updateStatus", async (req, res) => {
  try {
    console.log(req.body);
    const organization = await Organization.findOne({ _id: req.body._id });
    console.log("eeeee", organization);
    await Organization.updateOne(
      { _id: req.body._id },
      { $set: req.body }
    );

    const organizationUpdated = await Organization.findOne({ _id: req.body._id });
    organizationUpdated.password = undefined;
    res.status(200).send({ organizationUpdated: organizationUpdated, message: "Organization updated" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error);
  }
});

router.get("/organizations", async (req, res) => {
  try {
    console.log("zzzzzzz");
    const organizations = await Organization.find({},{ password:0});
    

    if (organizations) {
      console.log("zzzzzzz");
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
    },{ password:0});

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

router.get("/:id", async (req, res) => {
  console.log("sssasssss")

  try {
    const organization = await Organization.findOne({ _id: req.params["id"] },{ password:0});
    organization.password = undefined;
    if (organization) {
      console.log("aaaaaaaa", organization);
      res
        .status(200)
        .send({ organization: organization, message: "Organization found" });
    } else {
      res.status(404).send({ message: "Organization Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error });
    console.log(error)
  }
});



const fileSizeFormatter = (bytes, decimal) => {
  if(bytes === 0){
      return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}



// const storage = multer.diskStorage({
  
//   destination: (req, file, cb) =>{
//     createBrotliCompress(null, "../uploads")
//   },

//   filename: (req, file, cb)=>{
//     cb(null, Date.now()+path.extname(file.name))
//   }
// })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg' || file.mimetype.split("/")[1] === "pdf" || file.mimetype.split("/")[0] === "video"){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});


router.post('/upload', upload.single('image'), async(req, res, next) => {
  console.log(req.file.path)
    try{
        res.status(201).send({path:req.file.path,message:'File Uploaded Successfully'});
        console.log("done")
    }catch(error) {
        console.log(error)
        res.status(400).send(error.message);
    }
});


module.exports = router;
