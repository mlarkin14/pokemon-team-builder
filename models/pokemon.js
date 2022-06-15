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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "teams",
        key: "id",
      },
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
