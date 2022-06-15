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
