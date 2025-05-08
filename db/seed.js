const { db } = require('./connection')
const { Movie, User } = require('../models/index')
const userData = require('./users.json')
const movieData = require('./movies.json')

const seed = async () => {
  // drop the db
  await db.sync({ force: true })

  // add the data
  const users = await User.bulkCreate(userData)
  const movies = await Movie.bulkCreate(movieData)
  // associate some data
  await Promise.all([
    users[0].addMovie(movies[0]),
    users[0].addMovie(movies[1]),
    users[1].addMovie(movies[2]),
    users[1].addMovie(movies[3])
  ])

  console.log('Movies and User database info populated!')
}

// export my seed function
// module.exports = seed
seed()
