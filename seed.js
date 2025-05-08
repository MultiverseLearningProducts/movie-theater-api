const db = require("./db.js");
const { Movie, User, Watched } = require("./models/index.js");
const { movies, users, watched } = require("./data.json");

async function seed() {
  await db.sync({ force: true });
  await User.bulkCreate(users);
  await Movie.bulkCreate(movies);
  await Watched.bulkCreate(watched);
  console.log("Database populated");
}

seed();
