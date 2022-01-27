const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('not correct '))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('bunday foydalanuvchi mavjud'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }
    async post(req, res, next) {
       
        const {email, name, adress, price, number} = req.body
        console.log(name)
        // if (!email || !name) {
        //     return next(ApiError.badRequest('not correct '))
        // }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('siz uje zakaz qilgansiz'))
        }
        const orderUser = await User.create({email, name, adress, price, number})
        return res.send({orderUser})
    }
    async getAll (req, res)  {
            const users = await User.findAll()
            return res.send(users)
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('foydalanuvhi topilmadi'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('parol boshqacha'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserController()