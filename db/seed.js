const { db } = require('./connection')
const { Show, User } = require('../models/index')
const userData = require('./users.json')
const showData = require('./shows.json')

const seed = async () => {
  // drop the db
  await db.sync({ force: true })

  // add the data
  const users = await User.bulkCreate(userData)
  const shows = await Show.bulkCreate(showData)
  // associate some data
  await Promise.all([
    users[0].addShow(shows[0]),
    users[0].addShow(shows[1]),
    users[1].addShow(shows[2]),
    users[1].addShow(shows[3])
  ])

  console.log('Shows and User database info populated!')
}

//export my seed function
// module.exports = seed
seed()
