const Movie = require('./Movie')
const User = require('./User')

Movie.belongsToMany(User, { through: 'watched' })
User.belongsToMany(Movie, { through: 'watched' })

module.exports = {
  Movie,
  User
}
