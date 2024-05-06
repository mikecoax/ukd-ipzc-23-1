(require("dotenv").config()).parsed;

const { Sequelize, DataTypes } = require('sequelize');

const Student = require('./student.js');

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  });

Student(sequelize, DataTypes);

module.exports = sequelize;