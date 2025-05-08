const express = require("express");
const routes = require("./routes/index.js");

const app = express();

// Parses incoming requests with JSON payloads.
app.use(express.json());

// Connects the routers.
app.use("/users", routes.users);
app.use("/movies", routes.movies);

module.exports = app;
