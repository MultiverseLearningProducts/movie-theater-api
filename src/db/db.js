// imports
const { Sequelize, DataTypes } = require('sequelize')

//create an instance of the database call it db
const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './movie_watchlist.sqlite',
    logging: false
})



//export
module.exports = { db, DataTypes }