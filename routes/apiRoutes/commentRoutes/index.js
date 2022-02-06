const router = require('express').Router();
const {
    createComment,
    getAllComments
} = require('../../../controllers/commentController');

router.route('/')
    .post(createComment)
    .get(getAllComments)

module.exports = router;