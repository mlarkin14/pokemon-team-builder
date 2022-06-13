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


module.exports = router;