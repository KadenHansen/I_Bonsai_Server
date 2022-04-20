const mongoose = require('mongoose')
const { Schema } = mongoose
import Event from './Event'

const treeSchema = new Schema({
    Name: {type: string, required:true},
    Age: {type: number},
    Species: {type: string},
    Style: {type: string},
    Events: []
})

const Tree = mongoose.model('Tree', treeSchema)

module.exports = Tree