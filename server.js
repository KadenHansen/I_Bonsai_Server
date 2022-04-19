// DEPENDENCIES
const cors = require('cors')
const express = require('express')
const app = express()

// CONFIGURATIONS & MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.json('myBonsai homepage stub')
})

// CONTROLLERS

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})  