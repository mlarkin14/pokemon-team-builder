const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Teams extends Model {}

Teams.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Teams",
  }
);

module.exports = Teams;
