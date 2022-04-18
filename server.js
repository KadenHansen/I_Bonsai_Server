// DEPENDENCIES
const express = require('express')
const app = express()

// CONFIGURATIONS & MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ROOT
app.get('/', (req, res) => {
    res.send('myBonsai homepage stub')
})

// CONTROLLERS

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})