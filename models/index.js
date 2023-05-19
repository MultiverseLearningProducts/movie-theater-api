const Show = require('./Show')
const User = require('./User')

Show.belongsToMany(User, { through: 'watched' })
User.belongsToMany(Show, { through: 'watched' })

module.exports = {
  Show,
  User
}
