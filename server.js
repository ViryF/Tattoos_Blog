const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const { Category, Post } = require('./models')
const { categoryController, postController } = require('./controllers')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

// app.use('/api', routes)

app.get('/categories', categoryController.getAllCategories)
app.get('/categories/:id', categoryController.getCategoryById)
app.get('/createposts', postController.createPost)
app.get('categories/:id/posts', postController.getAllPosts)




// async (req, res) => {
//   const categories = await Category.find({})
//   res.json(categories)
// })

// app.get('/categories/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const categories = await Category.findById(id)
//     if(!categories) throw Error('Category not found!')
//     res.json(categories)
//   } catch (e) {
//     console.log(e)
//     res.send('Category not found!')
//   }
// })




db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))