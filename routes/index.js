const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView } = require('../controllers/userController');
const { getAllPosts } = require('../controllers/postController')
router.get('/', renderHomePage);
router.get('/login', loginView);
router.get('/posts', getAllPosts);
// prepend api to all routes declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;