const uuid = require('uuid')
const path = require('path');
const {NationalFood} = require('../models/models')
const ApiError = require('../error/ApiError');

class NationalFoodController {
    async create(req, res, next) {
      
            let {name, price, complexId, img } = req.body
            const food = await NationalFood.create({name, price, img, complexId});
            if(food) {
                return   res.json({message: 'create food'})
              }
            return res.json(food)
        

    }

    async getAll(req, res) {
            const fastFoods = await NationalFood.findAll()
            res.send(fastFoods)
    }

    async getOne(req, res) {
        const { id } = req.params
        const getOneFood = await FastFood.findOne(
            {
                where: {id}
            },
        )
        return res.json(getOneFood)
    }
}


module.exports = new NationalFoodController()