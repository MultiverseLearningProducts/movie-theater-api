const express = require('express');
const debug = require('debug')('app:routes');

const { db } = require('../db');

const { check } = require('express-validator');

const router = express.Router();

const { getAllUsers, getUserById, getShowsbyUserId } = require('../controllers/index');


router.get('*/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/:id/shows', getShowsbyUserId);

module.exports = router;