const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Pokemon extends Model {}

Pokemon.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Pokemon",
  }
);

module.exports = Pokemon;
