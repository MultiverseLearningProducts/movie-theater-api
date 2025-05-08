const express = require("express");
const { Movie, User } = require("../models/index.js");

const router = express.Router();

router.post("/", async function (req, res) {
  // TODO: Create a user.
});

router.get("/", async function (req, res) {
  // TODO: Get all users.
});

router.get("/:userId", async function (req, res) {
  // TODO: Get one user.
});

router.patch("/:userId", async function (req, res) {
  // TODO: Update one user.
});

router.delete("/:userId", async function (req, res) {
  // TODO: Delete one user.
});

router.get("/:userId/movies", async function (req, res) {
  // TODO: Get all movies watched by one user.
});

router.post("/:userId/movies/:movieId", async function (req, res) {
  // TODO: Associate a user with a movie they have watched.
  // HINT: No body required; all the required info is in the params!
});

module.exports = router;
