const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: process.env.DB_TIMEZONE,
  logging: false,
});

const testSequelizeConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { testSequelizeConnection };


module.exports= {sequelize};
