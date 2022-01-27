const Router = require('express')
const router = new Router()
const foodsRouter = require('./foodsRouter')
const userRouter = require('./userRouter')
const complexRouter = require('./complexRouter')

router.use('/user', userRouter)
router.use('/complex', complexRouter)
router.use('/foods', foodsRouter)

module.exports = router