// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define Category model as a subclass of the Sequelize Model class
class Category extends Model {}

// Initialize the Category model, specifying the column definitions and other options
Category.init(
  {
    // Define columns for the category table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Pass the Sequelize connection instance to the model
    timestamps: false, // Disable timestamps for the model
    freezeTableName: true, // Set the table name to be the same as the model name
    underscored: true, // Use underscores instead of camelCase in the column names
    modelName: 'category', // Set the model name
  }
);

// Export the Category model for use in other modules
module.exports = Category;
