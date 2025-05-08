const express = require("express");
const { Movie, User } = require("../models/index.js");

const router = express.Router();

router.post("/", async function (req, res) {
  // TODO: Create a movie.
});

router.get("/", async function (req, res) {
  // TODO: Get all movies.
});

router.get("/:movieId", async function (req, res) {
  // TODO: Get one movie.
});

router.patch("/:movieId", async function (req, res) {
  // TODO: Update one movie.
});

router.delete("/:movieId", async function (req, res) {
  // TODO: Delete one movie.
});

router.get("/:movieId/users", async function (req, res) {
  // TODO: Get all users who watched this movie.
});

router.post("/:movieId/users/:userId", async function (req, res) {
  // TODO: Associate a movie with a user who has watched it.
  // HINT: No body required; all the required info is in the params!
});

module.exports = router;
