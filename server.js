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
const corsOptions = {
   origin:'*', 
}

app.use(cors(corsOptions))
app.use(cors())


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