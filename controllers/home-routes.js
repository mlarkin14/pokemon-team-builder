const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
    res.render("homepage");
});

router.get("/pokemon", (req, res) => {
    res.render("pokemon");
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));
module.exports = router;