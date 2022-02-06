const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// prepend api to all routes declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;