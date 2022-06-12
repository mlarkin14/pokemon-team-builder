const router = require('express').Router();
var authRouter = require('./controllers/auth');
var passport = require('passport');
var session = require('express-session');

var SQLiteStore = require('connect-sqlite3')(session);
router.use('/', homeRoutes);
app.use('/', authRouter);

module.exports = router;