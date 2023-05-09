// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define ProductTag model as a subclass of the Sequelize Model class
class ProductTag extends Model {}

// Initialize the ProductTag model, specifying the column definitions and other options
ProductTag.init(
  {
    // Define columns for the product_tag table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize, // Pass the Sequelize connection instance to the model
    timestamps: false, // Disable timestamps for the model
    freezeTableName: true, // Set the table name to be the same as the model name
    underscored: true, // Use underscores instead of camelCase in the column names
    modelName: 'product_tag', // Set the model name
  }
);

// Export the ProductTag model for use in other modules
module.exports = ProductTag;
