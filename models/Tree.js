const mongoose = require('mongoose')
const { Schema } = mongoose
// import Event from './Event'

const treeSchema = new Schema({
  Name: { type: String, required: true },
  Age: { type: Number },
  Species: { type: String },
  Style: { type: String },
  Image: { type: String },
  Events: [],
})

const Tree = mongoose.model('Tree', treeSchema)

module.exports = Tree
