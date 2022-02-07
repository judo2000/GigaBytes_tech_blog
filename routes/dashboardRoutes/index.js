const router = require('express').Router();
const {
    getMyPosts,
} = require('../../controllers/dashboardController');

router.route('/')
    .get(getMyPosts)
   
module.exports = router;