// import models
const Pokemon = require("./pokemon");
const Teams = require("./teams");
const User = require("./user");

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
  foreignKey: "user_id",
});

// User hasMany Teams
User.hasMany(Teams, {
  foreignKey: "user_id",
});

module.exports = {
  Pokemon,
  Teams,
  User,
};
