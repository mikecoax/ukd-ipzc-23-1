const dotenv = (require("dotenv").config()).parsed;

let config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  migrationStorageTableName: "sequelize_migrations",
  seederStorageTableName: "sequelize_seeds"
};

module.exports = {
  development: config,
  test: config,
  production: config
}
