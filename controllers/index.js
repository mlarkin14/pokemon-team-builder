const router = require('express').Router();

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/team', teamRoutes)


module.exports = router;