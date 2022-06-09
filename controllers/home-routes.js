const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
    res.render("homepage");
});

router.get("/pokemon", (req, res) => {
    res.render("pokemon");
});

module.exports = router;