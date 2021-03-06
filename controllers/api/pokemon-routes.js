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

//create a new pokemon and add to team
router.post("/", (req, res) =>  {
    Pokemon.create({
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        height: req.body.height,
        img_url: req.body.img_url,
    })
        .then(async dbPokemonData => {
           const team =  await Teams.findOne({
                where: {
                    user_id: req.session.user_id
                }
           })
            team.addPokemon(dbPokemonData);
        })


            // res.json(dbPokemonData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


//delete pokemon
router.delete('/:id', (req, res) => {
    Pokemon.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPokemonData => {
            if (!dbPokemonData) {
                res.status(404).json({ message: 'No pokemon found with this id' });
                return
            }
            res.json(dbPokemonData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    })
})

module.exports = router;