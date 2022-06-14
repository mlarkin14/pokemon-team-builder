const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
    res.render("homepage", {
        loggedIn: req.session.loggedIn
    });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});


router.get("/pokemon", (req, res) => {
    res.render("pokemon", {
        loggedIn: req.session.loggedIn
    });

    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
});

router.get("/team", (req, res) => {
    res.render("team", {
        loggedIn: req.session.loggedIn
    });

    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
});

module.exports = router;