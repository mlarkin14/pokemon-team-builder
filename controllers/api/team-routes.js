const router = require("express").Router()
const { User, Teams, Pokemon } = require('../../models')

// get all teams
router.get('/', (req, res) => {
    Teams.findAll({
        attributes: [
            'id',
            'user_id'
        ],
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

//create a new team
router.post("/", (req, res) => {
    console.log("data from frontend", req.body)
    Teams.create({
        user_id: req.body.user_id
    })
        .then(dbTeamData => res.json(dbTeamData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


module.exports = router;