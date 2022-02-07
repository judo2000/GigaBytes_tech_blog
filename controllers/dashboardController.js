const {
    Post,
    User,
    Comment
} = require('../models');

module.exports = {
    getMyPosts: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const postsData = await Post.findAll({
                where: {
                    userId: req.session.user_id,
                },
                include: 
                [
                    {
                        model: Comment,
                        attributes: ['id', 'comment_text', 'postId', 'userId', 'createdAt'],
                        include: {
                        model: User,
                        attributes: ['username']
                        }
                    },
                    {
                        model: User,
                        attributes: ['username']
                    }
                ],
            });
            const posts = postsData.map(post => post.get({ plain: true }));
            res.render('dashboard', {
                posts,
                loggedInUser: req.session.user || null,
            })
        } catch (e) {
            res.json(e);
        }
    }
}