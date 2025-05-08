const { DataTypes, Model } = require("sequelize");
const db = require("../db.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = User;
