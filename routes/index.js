const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const postRoutes = require('./apiRoutes/postRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./apiRoutes/commentRoutes');
const { loginView, signupView } = require('../controllers/userController');
const { renderHomePage, getAllPosts, homePosts, getPostById, createPostView, editPost } = require('../controllers/postController');


router.get('/', homePosts)

router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/newPost', createPostView)
router.use('/posts', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentRoutes);
router.use('/api', apiRoutes);

module.exports = router;