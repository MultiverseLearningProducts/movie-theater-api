// imports
const { Sequelize, DataTypes, Model } = require('sequelize');

//create an instance of the database call it db
const path = require('path');
const debug = require('debug')('app:sequelize'); //debug package

const db = new Sequelize('test_AMEX_1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

//export
module.exports = { db, DataTypes, Model };
