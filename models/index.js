const { Show } = require('./Show')
const { User } = require('./User')

Show.belongsTo(User)
User.hasMany(Show)

module.exports = {Show, User}
