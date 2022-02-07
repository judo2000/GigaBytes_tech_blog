const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const postRoutes = require('./apiRoutes/postRoutes')
const { renderHomePage, loginView, signupView } = require('../controllers/userController');
const { getAllPosts, getPostById } = require('../controllers/postController');

const dashboardRoutes = require('./dashboardRoutes')

router.get('/', getAllPosts);

router.get('/login', loginView);
router.get('/signup', signupView);
//router.get('/posts', getAllPosts);
router.use('/posts', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;