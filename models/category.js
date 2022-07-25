const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema(
  {
    description: { type: String, required: true},
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Category', Category)