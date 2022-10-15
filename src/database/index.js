require("dotenv").config();
const DB_CONFIG = require("../config/database");
const Sequelize = require("sequelize");
const connection = new Sequelize(DB_CONFIG);

connection.authenticate().then(() => {
    console.log('Connection has been established successfully................');
}).catch((error) => {
    console.error('Unable to connect to the database:............... ', error);
});


import { Users } from "../models/users";
Users.init(connection);

Users.associate(connection.models);

module.exports = connection;
