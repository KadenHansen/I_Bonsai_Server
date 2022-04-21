// DEPENDENCIES
require('dotenv').config()
const mongoose = require('mongoose')

//MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
      .then(() => console.log("DB Connected"))
      .catch((err) => console.log(err))

// EXPORTS
module.exports.Tree = require('./Tree')
module.exports.Species = require('./Species')
module.exports.Event = require('./Event')