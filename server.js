// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;


// Import routes
const usersRouter = require('./routes/users');
const showsRouter = require('./routes/shows');

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Use the users router for requests to /users
app.use('/users', usersRouter);

// Use the shows router for requests to /shows
app.use('/shows', showsRouter);

// A simple route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the movie theater API!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
