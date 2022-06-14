// import models
const User = require("./User");
const Teams = require("./Teams");
const Pokemon = require("./Pokemon");

// User hasMany Teams
User.hasMany(Teams, {
  foreignKey: "user_id",
});

User.hasMany(Pokemon, {
  foreignKey: 'pokemon_id'
})

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

// Pokemon belongsTo Teams
Pokemon.belongsTo(User, {
  foreignKey: "user_id",
});



module.exports = {
  Pokemon,
  Teams,
  User,
};
