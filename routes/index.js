const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('You got this!'))

router.get('/categories', controllers.getAllCategories)

router.get('/categories/:id', controllers.getCategoryById)

router.post('/posts', controllers.createPost)

router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

// router.post('/account', controllers.createAccount)

module.exports = router
