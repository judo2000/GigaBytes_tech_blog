const router = require('express').Router();
const {
    getMyPosts,
    editPostView
} = require('../../controllers/dashboardController');

router.route('/')
    .get(getMyPosts)

router.route('/editPost/:id')
    .get(editPostView)
   
module.exports = router;