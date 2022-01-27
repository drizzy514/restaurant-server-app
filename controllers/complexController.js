const {Complex} = require('../models/models')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        console.log(name)
        const complex = await Complex.create({name})
        return res.json({complex})
    }

    async getAll(req, res) {
        const complexes = await Complex.findAll()
        return res.json({complexes})
    }

}

module.exports = new BrandController()