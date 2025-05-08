const { DataTypes, Model } = require("sequelize");
const db = require("../db.js");

class Movie extends Model {}

Movie.init(
  {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Movie;
