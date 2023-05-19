const { Sequelize, DataTypes, Model } = require('sequelize')
const path = require('path')

const db = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false
})

module.exports = { db, DataTypes, Model }
