// import models
const Pokemon = require("./pokemon");
const Teams = require("./teams");
const User = require("./user");

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

// Pokemon belongsTo Teams
Pokemon.belongsTo(Teams, {
  foreignKey: "team_id",
});

// Teams have many Pokemon
Teams.hasMany(Pokemon, {
  foreignKey: "team_id",
});

// User belongTo Teams
Teams.belongsTo(User, {
  foreignKey: "user.id",
});

// User hasMany Teams
User.hasMany(Teams, {
  foreignKey: "user.id",
});

module.exports = {
  Pokemon,
  Teams,
  User,
};
