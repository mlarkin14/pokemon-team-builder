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
    // pokemon_team: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: true
    // },
    user_id: {
      type: DataTypes.INTEGER, 
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
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
