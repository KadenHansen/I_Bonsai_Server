const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
    Description: {type: String},
    DatePotted: {type: Date},
    Image:{type: String},
    Notes:{type: String}
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event