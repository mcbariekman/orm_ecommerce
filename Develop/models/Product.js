const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

// Initialize Product model (table) by extending off Sequelize's Model class

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// The init() method defines the columns (fields) for the Product model.
// Each column is defined using an object with the following properties:
// type: Specifies the data type of the column (e.g., DataTypes.STRING).
// allowNull: Specifies whether the column allows null values.
// primaryKey: Specifies whether the column is the primary key of the table.
// autoIncrement: Specifies whether the column auto-increments for new records.
// Additional validations can be specified using the validate property.
// The second object passed to init() defines additional configurations for the model, such as the table name and underscored naming.

module.exports = Product;
