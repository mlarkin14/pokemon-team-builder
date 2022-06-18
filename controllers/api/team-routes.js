const router = require("express").Router()
const { User, Teams, Pokemon } = require('../../models')

// get all teams
router.get('/', (req, res) => {
    Teams.findAll({
        // attributes: [
        //     'id',
        //     'user_id'
        // ],
        include: [
            {
                model: User,
                attributes: ['user_name']
            }
        ]
    })
        .then(dbTeamData => res.json(dbTeamData))
        .catch(err => {
            console.log(err),
                res.status(500).json(err);
        })
})

//add pokemon to team
router.post("/", (req, res) => {
    Teams.create({
        user_id: req.session.user_id,
        pokemon: req.body.pokemon
    })
        .then(dbTeamData => res.json(dbTeamData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


module.exports = router;