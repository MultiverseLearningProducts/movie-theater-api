const Movie = require("./Movie.js");
const User = require("./User.js");
const Watched = require("./Watched.js");

User.belongsToMany(Movie, { through: Watched });
Movie.belongsToMany(User, { through: Watched });

module.exports = {
  Movie,
  User,
  Watched,
};
