const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', userController.registration)
router.post('/sellfood', userController.post)
router.get('/users', userController.getAll)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router