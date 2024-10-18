const express = require('express');
const { body, validationResult } = require('express-validator');
const { User, Show } = require('../models');
const router = express.Router();

// POST create a user
router.post(
    '/',
    body('username').isEmail().withMessage('Username must be a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user', error: error.message });
        }
    }
);

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

// GET all shows watched by a specific user
router.get('/:userId/shows', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId, {
            include: [Show], // Include associated shows
        });

        if (user) {
            res.json(user.Shows); // Return the shows associated with the user
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
            await user.addShow(show); // Create the association between user and show
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

