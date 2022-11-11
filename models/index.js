const { Show } = require("./Show");
const { User } = require("./User");

Show.belongsToMany(User, { through: "UsersShows" });
User.belongsToMany(Show, { through: "UsersShows" });

module.exports = { Show, User };
