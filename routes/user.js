const { Router } = require("express");
const findUser = require("../middleware/usersMiddleware");
const { User, Show } = require("../models");
const userRouter = Router();

// GET all users

userRouter.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.send(allUsers);
});

// GET one user - using an endpoint
// if user does not exist, return 404 not found status
userRouter.get("/:id", async (req, res) => {
  const singleUser = await User.findByPk(req.params.id);
  if (!singleUser) {
    res.status(404).send("User not found");
  } else {
    res.send(singleUser);
  }
});

// GET all shows watched by one user
// if user does not exist, return 404 not found status
// if user has no watched shows, return 404 not found status
userRouter.get("/:id/shows", async (req, res) => {
  const singleUser = await User.findByPk(req.params.id);
  if (!singleUser) {
    return res.status(404).send("User not found");
  } else {
    const singleUserShows = await singleUser.getShows({
      where: { status: "watched" },
    });
    if (singleUserShows.length === 0) {
      res.status(404).send(`No shows found for ${singleUser.username}`);
    } else {
      res.send(singleUserShows);
    }
  }
});

// PUT update and add a show if a user has watched it
// if user does not exist, return 404 not found status
// if show does not exist, return 404 not found status
userRouter.put("/:userId/shows/:showId", async (req, res) => {
  const singleUser = await User.findByPk(req.params.userId);
  const showToUpdate = await Show.findByPk(req.params.showId);
  if (!singleUser || !showToUpdate) {
    return res.status(404).send("Not found");
  }
  const updatedShow = await showToUpdate.update(req.body, {
    where: {
      id: req.params.showId,
    },
  });
  if (updatedShow.status === "watched") {
    await singleUser.addShow(updatedShow);
  }
  res.status(201).send(updatedShow);
});

module.exports = userRouter;
