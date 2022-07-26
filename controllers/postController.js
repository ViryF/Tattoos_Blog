const { Post } = require('../models')

const createPost = async (req, res) => {
  try {
    const post = await new Posts(req.body)
    await post.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(ride)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllPosts = async (req, res) => {
  try {
    const { id } = req.params
    const posts = await Post.findById(id)
    return res.status(200).json(posts)
  } catch (e) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts
}