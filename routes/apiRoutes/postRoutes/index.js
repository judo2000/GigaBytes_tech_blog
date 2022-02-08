const router = require('express').Router();
const {
    createPost,
    editPost,
    getAllPosts,
    getPostById,
} = require('../../../controllers/postController');

router.route('/')
    .post(createPost)
    .get(getAllPosts)

router.route('/:postId')
    .get(getPostById)
    .put(editPost)

module.exports = router;