const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
    res.render("homepage");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/team", (req, res) => {
    res.render("team");
});


module.exports = router;