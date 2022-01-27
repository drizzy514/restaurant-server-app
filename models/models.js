const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    name: {type: DataTypes.STRING, allowNull:false, validate: {
        notNull: { args: true, msg: "You must enter a name" }
    }},
    adress: {type: DataTypes.STRING, allowNull:false },
    price: {type: DataTypes.INTEGER, allowNull: false} ,
    number: {type: DataTypes.INTEGER, allowNull: false}   
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketFood = sequelize.define('basket_food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Complex = sequelize.define('complexes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const FastFood = sequelize.define('fast_food', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name:{type:DataTypes.STRING, allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    img:{type: DataTypes.STRING, allowNull:false}
})

const NationalFood = sequelize.define('national_food', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name:{type:DataTypes.STRING, allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    img:{type: DataTypes.STRING, allowNull:false}
})


User.hasOne(Basket)
Basket.belongsTo(User)


BasketFood.hasMany(FastFood)
FastFood.belongsTo(BasketFood)


BasketFood.hasMany(NationalFood)
NationalFood.belongsTo(BasketFood)

Complex.hasMany(FastFood)
FastFood.belongsTo(Complex)

Complex.hasMany(NationalFood)
NationalFood.belongsTo(Complex)



module.exports = {
    User,
    Basket,
    FastFood,
    NationalFood,
    Complex,
    BasketFood
}



/*
    INSERT INTO complexes(
       name
    )VALUES('Master Food'),
            ('Max Way'),
            ('Evos');
*/