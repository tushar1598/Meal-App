const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(
  process.env.db,
  process.env.db_user,
  process.env.db_password,
  {
    dialect: "mysql",
    host: process.env.host,
    port: process.env.port,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // Add this if your database requires SSL
      },
    },
  }
);

module.exports = sequelize;
