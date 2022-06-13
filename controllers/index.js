const router = require('express').Router();
var authRouter = require('./controllers/auth');
var passport = require('passport');
var session = require('express-session');


const apiRoutes = require("./api");

router.use('/', homeRoutes);
router.use("/api", apiRoutes)

var SQLiteStore = require('connect-sqlite3')(session);
router.use('/', homeRoutes);
app.use('/', authRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));


module.exports = router;