require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const connection = require("./db");
const bodyParser = require('body-parser');

const adminRoutes = require("./routes/AdminController");
const eventRoutes = require("./routes/EventController");
const organizationRoutes = require("./routes/OrganizationController");
const donatorRoutes = require("./routes/DonatorController");
const newsRoutes = require("./routes/NewsController");

const stripe = require("./routes/stripe");




// database connection
connection();

// middlewares
app.use(express.json());
app.use(bodyParser.json());

////process.env.CLIENT
app.use(cors({ origin: process.env.CLIENT, "preflightContinue": true, "optionsSuccessStatus": 204, credentials: true, }))

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-control-request-methods,Access-Control-Allow-Origin,authorization');

    res.header("X-Requested-With", "XMLHttpRequest");

    // Set to true if you need the we
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.options(process.env.CLIENT, cors())



app.use("/api/admin", adminRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/organization", organizationRoutes);
app.use("/api/donator", donatorRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/stripe", stripe);

app.use('/uploads', express.static('uploads'));





const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}...`));