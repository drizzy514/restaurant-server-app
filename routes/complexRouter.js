const Router = require('express')
const router = new Router()
const complexController = require('../controllers/complexController')

router.post('/complexes', complexController.create)
router.get('/complexes', complexController.getAll)

module.exports = router