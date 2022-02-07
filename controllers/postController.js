const {
    Post,
    User,
    Comment,
} = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const { title, body, userId } = req.body;
        try {
            const newPost = await Post.create({
                title,
                body,
                userId,
                //userId: req.session.user.id,
            });
            res.json({ newPost });
        } catch (e) {
            res.json(e);
        }
    },
    getAllPosts: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const postsData = await Post.findAll({
                
                include: [
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
                        attributes: ['username'],
                    }
                ],
                order: [
                    ["createdAt", "DESC"]
                ]
            });
            const posts = postsData.map(post => post.get({ plain: true }));
            //res.json(posts);

            res.render('allPosts', {
                posts,
                loggedInUser: req.session.user || null,
            });
        } catch (e) {
            res.json(e);
        }
    },
    getPostById: async(req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const postData = await Post.findOne({
                where: {
                    id: req.params.postId
                },   
                include: [
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
                        attributes: ['username'],
                    }
                ],
            });
            const post = postData.get({ plain: true });
            //res.json(post)
            res.render('singlePost', {
                post,
                loggedInUser: req.session.user || null,
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
    },
    allPostsView: (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        res.render('allPosts')
    }
}