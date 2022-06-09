// DROP TABLE IF EXISTS user;
// DROP TABLE IF EXISTS team;
// DROP TABLE IF EXISTS pokemon;

// CREATE TABLE user (
//   id INTEGER AUTO_INCREMENT PRIMARY KEY,
//   user_name VARCHAR(50) NOT NULL,
//   password VARCHAR(50) NOT NULL
// );

// CREATE TABLE team (
//   id INTEGER AUTO_INCREMENT PRIMARY KEY,
//   user.id INTEGER,
//   CONSTRAINT fk_user FOREIGN KEY (user.id) REFERENCES user(id) ON DELETE SET NULL
// );

// CREATE TABLE pokemon (
//   id INTEGER,
//   team_id INTEGER,
//   name VARCHAR(30) NOT NULL,
//   CONSTRAINT fk_team FOREIGN KEY (team_id) REFERENCES team(id) ON DELETE SET NULL
// );
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
    team_id: {
      type: DataTypes.STRING,
      allowNull: false,
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
