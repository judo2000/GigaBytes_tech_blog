const router = require('express').Router();

// prepend api to all routes declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;