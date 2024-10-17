const { Sequelize, DataTypes, Model } = require('sequelize')
const path = require('path')


const db = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false
})

db.sync({ force: false }) // Set to true only for testing to reset the DB
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = { db, DataTypes, Model }
