const Show = require('./Show');
const User = require('./User');

// Define the many-to-many relationship with explicit foreign keys
// User.js
User.belongsToMany(Show, {
  through: 'user_shows', // Name of the junction table
  foreignKey: 'userId',
  otherKey: 'showId'
});

// Show.js
Show.belongsToMany(User, {
  through: 'user_shows',
  foreignKey: 'showId',
  otherKey: 'userId'
});


// Export the models
module.exports = {
    Show,
    User
};

