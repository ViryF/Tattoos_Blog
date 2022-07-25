const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    nickname: { type: String, required: true }, 
    description: { type: String, required: true},
    imageURL: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', Post)