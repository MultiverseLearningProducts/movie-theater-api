![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Movie Theater API

**TASK**: You are a Software Engineer for a movie theater company, and your team
is tasked with creating an API that can work with and serve data on our database
through an application server. We will be testing our API endpoints using
Postman, so no UI code is needed for now.

Your main task is creating the API! We will be working with Express to create
Routers for `Users` and `Shows`. We have a seed file that contains a list of
users and shows to add to the database. We will need to include that seed file
in our main server. While we don’t have a front-end, we will be using Postman to
interact with our API.

We’ll have 2 Express Routers:

- `Users`
- `Shows`

## Specifications

### User story

As a **user**, I want to keep track of the shows I have watched, so that I can
satisfy my urge to list things

### Install Dependencies

To install the dependencies, run `npm install`.

Once everything is installed, you can run `npm run seed` to reset and fill your
database with initial seed data. You can run this command at any time to reset
the database to the initial seed data.

### Create Express Server

- Create a file for your server and initialize it on port `3000` using Express.

### Define Routes

Create the route handlers for the project, per these definitions:

**Users**

- `GET` all users
- `GET` one user (user id in `req.params`)
- `GET` all shows watched by a user (user id in `req.params`)
- `PUT` associate a user with a show they have watched

**Shows**

- `GET` all shows
- `GET` one show (show id in `req.params`)
- `GET` all users who watched a show
- `PUT` update the `available` property of a show
- `DELETE` a show
- `GET` shows of a particular genre (genre in `req.params`)

**Make sure to include your routers in a directory named `routes`**

### Tests

- Test your endpoints using Postman

### Commit & Push

- `git add .`, `git commit -m “somemessage”` and `git push` so we can see your
  work.
