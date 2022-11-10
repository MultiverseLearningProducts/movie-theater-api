const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const { User, Show } = require("../models");
const showRouter = Router();

showRouter.get("/", async (req, res) => {
  try {
    const shows = await Show.findAll();
    if (!shows.length) {
      throw new Error("Unable to find shows in DB");
    }
    res.status(200).json(shows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

showRouter.get("/:id", async (req, res) => {
  try {
    const show = await Show.findOne({ where: { id: req.params.id } });
    if (!show) {
      throw new Error("No show with provided ID");
    }
    res.status(200).json(show);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

showRouter.get("/genres/:genre", async (req, res) => {
  try {
    const showWithGenre = await Show.findAll({
      where: { genre: req.params.genre },
    });
    if (!showWithGenre.length) {
      throw new Error("No shows found with this genre.");
    }
    res.status(200).json(showWithGenre);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

showRouter.put("/:id/watched", async (req, res) => {
  try {
    const watchedShow = await Show.findOne({ where: { id: req.params.id } });
    if (!watchedShow) {
      throw new Error("Show not found in db");
    }
    watchedShow.rating = req.body.rating;
    await watchedShow.save();
    res.status(200).send("Show rating successfully updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

showRouter.put("/:id/updates", async (req, res) => {
  try {
    const statusShow = await Show.findOne({ where: { id: req.params.id } });
    if (!statusShow) {
      throw new Error("Show not found in db");
    }
    statusShow.status = req.body.status;
    await statusShow.save();
    res.status(200).send("Show status successfully updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

showRouter.delete("/:id", async (req, res) => {
  try {
    const showToDelete = await Show.findOne({ where: { id: req.params.id } });
    if (!showToDelete) {
      throw new Error("The show you would like to delete does not exist");
    }
    showToDelete.destroy();
    res.status(200).send("Show removed.");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = showRouter;
