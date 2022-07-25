const Category = require('../models/category')
const Post = require('../models/post')

const createCategory = async (req, res) => {
  try {
    const category = await new Category(req.body)
    await category.save()
    return res.status(201).json({
      account
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

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

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Categories.findById(id)
    if (ride) {
      return res.status(200).json({ ride })
    }
    return res.status(404).send('The category with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
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
    const deleted = await Posts.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCategory,
  createPost,
  getAllCategories,
  getCategoryById,
  updatePost,
  deletePost
}
