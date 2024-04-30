const dotenv = require('dotenv')
dotenv.config()
const { Sequelize, DataTypes } = require("sequelize")

const students = require("./student")

const sequelize = new Sequelize({
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
})

sequelize.authenticate()

students(sequelize, DataTypes)

module.exports = sequelize