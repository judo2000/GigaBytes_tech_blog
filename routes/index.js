const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const postRoutes = require('./apiRoutes/postRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const { loginView, signupView } = require('../controllers/userController');
const { renderHomePage, getAllPosts, homePosts, getPostById, createPostView, editPost } = require('../controllers/postController');


router.get('/', homePosts)

router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/newPost', createPostView)
// router.get('/editPost/:postId', editPost)
// router.get('/editPost', editPostView)
router.use('/posts', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;