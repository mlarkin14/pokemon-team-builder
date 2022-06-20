// import models
const User = require("./user");
const Teams = require("./teams");
const Pokemon = require("./pokemon");

// User hasOne Teams
User.hasOne(Teams, {
  foreignKey: "user_id",
});

Teams.belongsTo(User, {
  foreignKey: 'user_id'
});

// Teams have many Pokemon
Teams.hasMany(Pokemon, {
  foreignKey: "team_id",
});

// Pokemon belongsTo Teams
Pokemon.belongsTo(Teams, {
  foreignKey: "team_id",
});

module.exports = {
  Pokemon,
  Teams,
  User,
};
