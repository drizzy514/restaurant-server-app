const Router = require('express')
const router = new Router()
const nationalFood = require('../controllers/nationalFood')
const fastFoodRouter = require('../controllers/fastFood')

router.post('/fastfood', fastFoodRouter.create)
router.get('/fastfood', fastFoodRouter.getAll)
router.get('/fastfood:id', fastFoodRouter.getOne)

router.post('/nationalfood', nationalFood.create)
router.get('/nationalfood', nationalFood.getAll)
router.get('/nationalfood:id', nationalFood.getOne)

module.exports = router