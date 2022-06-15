const router = require("express").Router();
const sequelize = require("../config/connection");
const { Pokemon } = require('../models')

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

    Pokemon.findAll({
        attributes: ['id', 'name', 'weight', 'height', 'type']
    })
        .then((dbPokemonData) => {
            const pokemon = dbPokemonData.map((pokemon) => pokemon.get({ plain: true }));
            res.render("team", {
                pokemon,
                loggedIn: req.session.loggedIn
            })
        })
        .catch((err) => {
            console.log((err) => {
                res.status(500).json(err);
            })
        })
    });


module.exports = router;