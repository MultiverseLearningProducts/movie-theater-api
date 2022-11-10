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
    res.status(500).send(error.message);
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

module.exports = showRouter;
