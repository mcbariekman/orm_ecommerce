// Import necessary modules and configure the environment
require('dotenv').config();

// Import Sequelize
const Sequelize = require('sequelize');

// Create a new Sequelize instance using the JawsDB URL if it exists, otherwise use local database credentials
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost', // Set the database host
      user: "root",
      password: process.env.DB_PASSWORD,
      dialect: 'mysql', // Set the database dialect
      dialectOptions: {
        decimalNumbers: true, // Enable support for decimal numbers in the database
      },
    });

// Export the Sequelize instance for use in other modules
module.exports = sequelize;
