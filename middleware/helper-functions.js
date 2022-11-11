const { User, Show } = require("../models");

async function getSingleUser(req, res, next) {
  req.singleUser = await User.findByPk(req.params.id);
  next();
}

async function getSingleShow(req, res, next) {
  req.singleShow = await Show.findByPk(req.params.id);
  next();
}

module.exports = { getSingleUser, getSingleShow };
