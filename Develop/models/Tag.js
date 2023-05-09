// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define Tag model as a subclass of the Sequelize Model class
class Tag extends Model {}

// Initialize the Tag model, specifying the column definitions and other options
Tag.init(
  {
    // Define columns for the tag table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Pass the Sequelize connection instance to the model
    timestamps: false, // Disable timestamps for the model
    freezeTableName: true, // Set the table name to be the same as the model name
    underscored: true, // Use underscores instead of camelCase in the column names
    modelName: 'tag', // Set the model name
  }
);

// Export the Tag model for use in other modules
module.exports = Tag;
