// import our db, Model, DataTypes
const express = require('express');
const User = require('../models/User'); // Adjust the path if necessary
const Show = require('../models/Show'); 
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users', error: error.message });
    }
});

// GET one user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user', error: error.message });
    }
});

// GET all shows watched by a user (user id in req.params)
router.get('/:id/shows', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [Show], // Assumes a relationship between User and Show models
        });
        if (user) {
            res.json(user.Shows); // Returns the shows associated with the user
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve shows for user', error: error.message });
    }
});

// PUT associate a user with a show they have watched
router.put('/:id/shows/:showId', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        const show = await Show.findByPk(req.params.showId);

        if (user && show) {
            await user.addShow(show); // Assumes a Many-to-Many relationship
            res.json({ message: `User ${user.id} is now associated with show ${show.id}` });
        } else {
            res.status(404).json({ message: 'User or Show not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to associate user with show', error: error.message });
    }
});

// Export the router
module.exports = router;

