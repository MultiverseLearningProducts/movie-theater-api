const { DataTypes, Model } = require("sequelize");
const db = require("../db.js");
const Movie = require("./Movie.js");
const User = require("./User.js");

class Watched extends Model {}

Watched.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    MovieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Watched;
