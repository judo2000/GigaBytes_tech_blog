const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView } = require('../controllers/userController');

router.get('/', renderHomePage);
// prepend api to all routes declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;