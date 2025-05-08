const { DataTypes, Model } = require("sequelize");
const db = require("../db.js");

class Movie extends Model {}

Movie.init(
  {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Movie;
