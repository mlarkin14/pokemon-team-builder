const router = require("express").Router()
const teamRoutes = require("./team-routes")

router.use("/teams", teamRoutes);

module.exports = router;