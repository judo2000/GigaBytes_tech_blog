const router = require('express').Router();
const { route } = require('express/lib/application');
const {
    getUserById,
    login,
    signupHandler,
    logout,
} = require('../../../controllers/userController');

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

router.route('/:userId')
    .get(getUserById);
    
module.exports = router;