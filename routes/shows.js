const { Router } = require("express");
const { body } = require("express-validator");
const { getSingleShow } = require("../middleware/helper-functions");
const { User, Show } = require("../models");
const showRouter = Router();

// GET all shows
showRouter.get("/", async (req, res) => {
  const allShows = await Show.findAll();
  res.send(allShows);
});

// GET one show - using an endpoint
// if show does not exist, return 404 not found status
showRouter.get("/:id", getSingleShow, async (req, res) => {
  const { singleShow } = req;
  //   const singleShow = await Show.findByPk(req.params.id);
  if (!singleShow) {
    res.status(404).send("Show not found");
  } else {
    res.send(singleShow);
  }
});

// GET shows of specific genre - using an endpoint
// if genre does not exist, return 404 not found status
showRouter.get("/genres/:genre", async (req, res) => {
  const showsByGenre = await Show.findAll({
    where: {
      genre: req.params.genre,
    },
  });
  if (showsByGenre.length === 0) {
    res.status(404).send(`No shows found for genre: ${req.params.genre}`);
  } else {
    res.send(showsByGenre);
  }
});

// PUT update a rating in a specific show - using an endpoint
// if show does not exist, return 404 not found status
showRouter.put(
  "/:listLocation/watched",
  body("rating").matches(/\d/).withMessage("Rating must be a number"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const allWatchedShows = await Show.findAll({
      where: { status: "watched" },
    });
    if (allWatchedShows.length === 0) {
      res.status(404).send("No watched shows");
    } else if (allWatchedShows.length < req.params.listLocation) {
      res.status(404).send("No show found at that location");
    } else {
      const showToUpdate = allWatchedShows[req.params.listLocation - 1];
      await showToUpdate.update(req.body);
      res.send(showToUpdate);
    }
  }
);

// PUT update the status on a specific show from "cancelled" to "on-going" or vice-versa - using an endpoint
showRouter.put("/:id/updates", getSingleShow, async (req, res) => {
  const { singleShow } = req;
  if (!singleShow) {
    res.status(404).send("Show not found");
  } else {
    if (singleShow.status === "cancelled") {
      await singleShow.update({ status: "on-going" });
    } else if (singleShow.status === "on-going") {
      await singleShow.update({ status: "cancelled" });
    }
    res.send(singleShow);
  }
});

// DELETE a show
showRouter.delete("/:id/delete", getSingleShow, async (req, res) => {
  const { singleShow } = req;
  if (!singleShow) {
    res.status(404).send("Show not found");
  } else {
    await Show.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  }
});

module.exports = showRouter;
