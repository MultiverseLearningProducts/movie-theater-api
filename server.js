const express = require('express');
const debug = require('debug')('app:server');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const { db } = require('./src/db'); //DATABASE!!

//import routes from src/routes folder
const routes = require('./src/routes/index');

//check database connection
db
    .authenticate()
    .then((res) => debug(colors.blue.inverse('Database is connected')))
    .catch((err) => {
        debug(
            colors.red.inverse('There was an error connecting to the database'),
            err
        );
        process.exit(1); //NODE TERMINATE SERVER
    });

const app = express();

if ((process.env.MODE = 'development')) {
    app.use(morgan('dev'));
}

dotenv.config({ path: path.join(__dirname, '.env') }); //find environment variables .env
app.use(express.static(path.join(__dirname, 'src', 'public'))); //public
app.use(express.json()); //server can speak in json

//ROUTES
app.use('/', routes);

const PORT = process.env.PORT || 8000;

const server = app.listen(
    PORT,
    debug(colors.rainbow(`Server is up and running on PORT: ${PORT}`))
);