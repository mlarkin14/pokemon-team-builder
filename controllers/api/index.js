const router = require("express").Router()
const userRoutes = require("./user-routes")
const teamRoutes = require("./team-routes")
const pokemonRoutes = require("./pokemon-routes")

router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/pokemon", pokemonRoutes);

module.exports = router;