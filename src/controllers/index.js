const { db } = require('../db');
const debug = require('debug')('app:controllers');
const { validationResult } = require('express-validator');
const { User } = require('../models/User');
const { Show } = require('../models/Show');

/*
    @desc Gets all users
    @route GET /users
    @access Public
*/
exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();

    if (!users) {
        res
            .status(400)
            .json({ success: false, message: 'All Users were not retrieved' });
    }

    res
        .status(200)
        .json({ users, success: true, message: 'All Users returned' });
};

/*
    @desc Get single user by id
    @route GET users/:id
    @access Public
*/
exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    if (!user) {
        res
            .status(400)
            .json({ success: false, message: 'User not found' });
    } else {
        res
            .status(200)
            .json({ user, success: true, message: 'User found successfully' });
    }
};

/*
    @desc Get all shows watched by the user
    @route GET users/:id/shows
    @access Public
*/
exports.getShowsbyUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const shows = await Show.findAll({ where: { UserId: userId } });

        res
            .status(200)
            .json({ shows, success: true, message: 'Shows by User found successfully' });
    } catch (error) {
        debug('Error: ', error);
        res
            .status(400)
            .json({ success: false, message: `Unable to find shows by User - Error: ${error.message}` });
    }
};