const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const { User, Show } = require("../models");
const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) {
      throw new Error("Unable to find users in DB");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      throw new Error("No user with provided ID");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get("/:id/shows", async (req, res) => {
  try {
    const userWithShows = await User.findOne({
      where: { id: req.params.id },
      include: Show,
    });
    console.log(userWithShows);
    const userShows = userWithShows.shows;

    if (!userShows.length) {
      throw new Error("No shows found for user");
    }

    res.status(200).json(userShows);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = userRouter;
