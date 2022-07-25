const { Schema } = require('mongoose')

const categorySchema = new Schema(
  {
    description: { type: String, required: true},
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = categorySchema