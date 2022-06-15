const router = require("express").Router()
const { User, Teams, Pokemon } = require('../../models')

// get all pokemon
router.get('/', (req, res) => {
    Pokemon.findAll({
        attributes: [
            'id',
            'name',
            'type',
            'weight',
            'height'
        ]
    })
        .then(dbPokemonData => res.json(dbPokemonData))
        .catch(err => {
            console.log(err),
                res.status(500).json(err);
        })
})

//create a new team
router.post("/", (req, res) => {
    Pokemon.create({
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        height: req.body.height,
        team_id: req.body.team_id
    })
        .then(dbPokemonData => res.json(dbPokemonData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


module.exports = router;