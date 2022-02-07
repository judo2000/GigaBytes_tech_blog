const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView } = require('../controllers/userController');
const { getAllPosts, getPostById } = require('../controllers/postController')
router.get('/', renderHomePage);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/posts', getAllPosts);
router.get('/posts/:postId', getPostById)
// prepend api to all routes declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;