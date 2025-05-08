![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Movie Theater API

**TASK**: You are a Software Engineer for a movie theater company, and your team
is tasked with creating an API that can work with and serve data on our database
through an application server. We will be testing our API endpoints using
Postman, so no UI code is needed for now.

Your main task is creating the API! We will be working with Express to create
Routers for `Users` and `Movies`. We have a seed file that contains a list of
users and movies to add to the database. We will need to include that seed file
in our main server. While we don't have a front-end, we will be using Postman to
interact with our API.

We'll have 2 Express Routers:

- `Users`
- `Movies`

## Specifications

### User story

As a **user**, I want to keep track of the movies I have watched, so that I can
satisfy my urge to list things

### Install Dependencies

To install the dependencies, run `npm install`.

Once everything is installed, you can run `npm run seed` to reset and fill your
database with initial seed data. You can run this command at any time to reset
the database to the initial seed data.

### Start the Server

- Run `npm start` to start the server.
- Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop the server at any time.

### Define Routes

Create the route handlers for the project, per these definitions:

**Users**

See `routes/users.js`.

- `POST /users`
- `GET /users`
- `GET /users/:userId`
- `PATCH /users/:userId`
- `DELETE /users/:userId`
- `GET /users/:userId/movies` (get all movies that a user has watched)
- `POST /users/:userId/movies/:movieId` (create an association between a user and a movie) (no body needed)

**Movies**

See `routes/movies.js`.

- `POST /movies`
- `GET /movies`
- `GET /movies/:movieId`
- `PATCH /movies/:movieId`
- `DELETE /movies/:movieId`
- `GET /movies/:movieId/users` (get all users who have watched a movie)
- `POST /movies/:movieId/users/:userId` (create an association between a movie and a user) (no body needed)

### Tests

Test your endpoints manually using Postman or similar.

### Commit & Push

- `git add .`, `git commit -m "somemessage"` and `git push` so we can see your
  work.
