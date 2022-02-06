const router = require('express').Router();
const {
    createPost,
    getAllPosts,
    getPostById,
    createPostView,
} = require('../../../controllers/postController');

router.route('/')
    .post(createPost)
    .get(getAllPosts)

router.route('/:postId')
    .get(getPostById)

module.exports = router;