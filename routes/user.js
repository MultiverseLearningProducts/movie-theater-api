const { Router } = require("express");
const { User, Show } = require("../models");

const userRouter = Router();

// GET all users

userRouter.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.send(allUsers);
});

// GET one user - using an endpoint
userRouter.get("/:id", async (req, res) => {
  const singleUser = await User.findByPk(req.params.id);
  res.send(singleUser);
});

// GET all shows watched by one user
userRouter.get("/:id/shows", async (req, res) => {
  const singleUser = await User.findByPk(req.params.id);
  const singleUserShows = await singleUser.getShows({
    where: { status: "watched" },
  });
  res.send(singleUserShows);
});

// PUT update and add a show if a user has watched it
userRouter.put("/:userId/shows/:showId", async (req, res) => {
  const singleUser = await User.findByPk(req.params.userId);
  console.log(singleUser);
  const showToUpdate = await Show.findByPk(req.params.showId);
  const updatedShow = await showToUpdate.update(req.body, {
    where: {
      id: req.params.showId,
    },
  });
  console.log(updatedShow);
  await singleUser.addShow(updatedShow);
  res.status(201).send(updatedShow);
});

module.exports = userRouter;
