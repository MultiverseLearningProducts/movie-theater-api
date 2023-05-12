const { db } = require('./connection')
const { Show, User } = require('../models/index')
const userData = require('./users.json')
const showData = require('./shows.json')

const seed = async () => {
  // drop the db
  await db.sync({ force: true })

  // add the data
  await Show.bulkCreate(showData)
  await User.bulkCreate(userData)

  console.log('Shows and User database info populated!')
}

//export my seed function
module.exports = seed
