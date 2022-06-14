const router = require('express').Router();
const { User } = require('../../models')


// GET /api/users
router.get('/', (req, res) => {
    //access user model and run findAll
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json('No user found with this id');
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'user', password: 'password'}
    User.create({
        user_name: req.body.user_name,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {username: 'user', password: 'password'}
    User.findOne({
        where: {
            user_name: req.body.user_name
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        // this will initiate the creation of the session and then run the callback function once complete
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.user_name = dbUserData.user_name;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    })
})

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {username: 'user', password: 'password'}

    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            // send back a 204 status code after session has been destroyed
            res.status(204).end();
        })
    }
    else {
        res.status(404).end();
    }
})

module.exports = router;