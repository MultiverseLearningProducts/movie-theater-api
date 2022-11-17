![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Movie Theater API
**TASK**: You are a Software Engineer for a movie theater company, and your team is tasked with creating an API that can work with and serve data on our database through an application server. We will be testing our API endpoints using Postman, so no UI code is needed for now. 

Your main task is creating the API! We will be working with Express to create Routers for `Users` and `Shows`. We have a seed file that contains a list of users and shows to add to the database. We will need to include that seed file in our main server. While we don’t have a front-end, we will be using Postman to interact with our API. 

We’ll have 2 Express Routers:
- `Users`
- `Shows`

## Movie Theaters API Express Routes Specifications

Now that we have the starting point, let’s get to work coding it out!  Use the following as a guide.

### Install Dependencies
- Install the following npm packages:
  - sqlite3
  - sequelize
  - express
  - express-validator
  - nodemon

### Create Express Server
- Create a file for your server and initialize it on port 3000 using Express.

### Define Routes
Create the route handlers for the project, per these definitions:

**Users**
- `GET` all users
- `GET` one user
- `GET` all shows watched by a user (user id in `req.params`) 
- `PUT` update and add a show if a user has watched it

**Shows**
- `GET` all shows
- `GET` one show
- `GET` shows of a particular genre (genre in req.params)
- `PUT` update rating of a show that has been watched
- `PUT` update the status of a show 
- `DELETE` a show

**Make sure to include your routers in a directory named `routes`**

### Tests
- Test your endpoints using Postman

### Commit & Push
- `git add .`, `git commit -m “somemessage”` and `git push` so we can see your work.

## Server Side Validation

### Updating Show Status
Use server-side validation in your routes to ensure that: 
- If a user tries to make a request to update the status of a show, the “status” field cannot be empty or contain whitespace. 
- The status must be a minimum of 5 characters and a maximum of 25 characters

### Updating Show Ratings
Use server-side validation in your routes to ensure that: 
- If a user tries to make a request to update the rating of a show, the “rating” field cannot be empty or contain whitespace
