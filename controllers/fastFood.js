const uuid = require('uuid')
const path = require('path');
const {FastFood} = require('../models/models')
const ApiError = require('../error/ApiError');

class FastFoodController {
    async create(req, res, next) {
      
            const {name, price, img,complexId } = req.body
           
                const food = await FastFood.create({name, price, img, complexId});
                if(food) {
                  return   res.json({message: 'create food'})
                }
                console.log(img)
            return res.json(food)


    }

    async getAll(req, res) {
            const fastFoods = await FastFood.findAll()
            res.send(fastFoods)
    }

    async getOne(req, res) {
        const {id} = req.params
        const getOneFood = await FastFood.findOne(
            {
                where: {id}
            },
        )
        return res.json(getOneFood)
    }
}


module.exports = new FastFoodController()