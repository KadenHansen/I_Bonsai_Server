const mongoose = require('mongoose')
const { Schema } = mongoose

const speciesSchema = new Schema({
    Name: {type: string, required:true},
    Description: {type: string},
    Fertilizer: {type: string},
    Placement: {type: string},
    Repotting: {type: string}
})

const Species = mongoose.model('Species', speciesSchema)

module.exports = Species