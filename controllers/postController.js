const {
    Post,
    User,
} = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const { title, body } = req.body;
        try {
            const newPost = await Post.create({
                title,
                body,
                userId: req.session.user.id,
            });
            res.json({ newPost });
        } catch (e) {
            res.json(e);
        }
    },
    getAllPosts: async (req, res) => {
        try {
            const postData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    }
                ],
                order: [
                    ["createdAt", "DESC"]
                ]
            });
            const posts = postsData.map(post => post.get({ plain: true }));
            res.render('allPosts', {
                posts,
            });
        } catch (e) {
            res.json(e);
        }
    },
    getPostById: async(req, res) => {
        try {
            const postData = await Post.findByPk(req.params.postId, {
                include: [
                    {
                        model: User,
                        attributes: ['username', 'userId']
                    }
                ],
            });
            const post = postData.get({ plain: true });
            res.render('singlePost', {
                post,
            });
        } catch (e) {
            res.json(e);
        }
    },
    createPostView: (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/');
        }
        res.render('createPost');
    }
}