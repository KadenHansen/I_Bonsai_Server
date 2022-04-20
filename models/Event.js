const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
    Description: {type: string},
    DatePotted: {type: date},
    Image:{type:image||string},
    Notes:{type:string}
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event