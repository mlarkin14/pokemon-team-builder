const router = require("express").Router();
const sequelize = require("../config/connection");
const { Pokemon, Teams } = require('../models')

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

    Teams.findOne({
        where: {
            user_id: req.session.id
        },
        include: [
            {
                model: Pokemon
            }
        ]
    })
        .then((dbTeamData) => {
            // const team = dbTeamData.map((team) => team.get({ plain: true }));
            res.render("team", {
                dbTeamData,
                loggedIn: req.session.loggedIn
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


module.exports = router;