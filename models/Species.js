const mongoose = require('mongoose')
const { Schema } = mongoose

const speciesSchema = new Schema({
    Name: {type: String, required:true},
    Description: {type: String},
    Fertilizer: {type: String},
    Placement: {type: String},
    Repotting: {type: String}
})

const Species = mongoose.model('Species', speciesSchema)

module.exports = Species