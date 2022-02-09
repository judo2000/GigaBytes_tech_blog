const router = require('express').Router();
const {
    createPost,
    editPost,
    getAllPosts,
    getPostById,
    deletePost,
} = require('../../../controllers/postController');

router.route('/')
    .post(createPost)
    .get(getAllPosts)

router.route('/:postId')
    .get(getPostById)
    .put(editPost)
    .delete(deletePost)

module.exports = router;