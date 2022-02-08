const router = require('express').Router();
const {
    createPost,
    editPost,
    getAllPosts,
    getPostById,
} = require('../../../controllers/postController');

router.route('/')
    .post(createPost)
    //.put(editPost)
    .get(getAllPosts)

router.route('/:postId')
    .get(getPostById)
    .put(editPost)

//router.route('/:postId')
module.exports = router;