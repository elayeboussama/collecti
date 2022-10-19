require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();

const adminRoutes = require("./routes/AdminControler");




// database connection
//connection();

// middlewares
app.use(express.json());
app.use(bodyParser.json());

////process.env.CLIENT
app.use(cors({ origin: process.env.CLIENT , "preflightContinue": true, "optionsSuccessStatus": 204, credentials: true, }))

// Add headers before the routes are defined
app.use(function(req, res, next) {

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






const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}...`));