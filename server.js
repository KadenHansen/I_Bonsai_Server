// DEPENDENCIES
const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// CONFIGURATIONS & MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})

// ROOT
app.get('/', (req, res) => {
    res.json('myBonsai homepage stub')
})

// CONTROLLERS
app.use("/inventory", require("./controllers/inventory"))

// LISTEN
let port = process.env.PORT
if (port == null || port == "") {
    port = 8000
}
app.listen(port)  