// import our db, Model, DataTypes
const { db, DataTypes } = require('../db/connection')

// Creating a User child class from the Model parent class
const Movie = db.define('movies', {
  title: DataTypes.STRING,
  genre: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  available: DataTypes.BOOLEAN
})

// exports
module.exports = Movie
