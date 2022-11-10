const express = require("express");
const seed = require("../seed");
const { User } = require("../models");

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await User.findAll();
  res.send(allUsers);
});

app.listen(5001, async () => {
  await seed();
  console.log("Listening on port 5001");
});
