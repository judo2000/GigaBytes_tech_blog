const {
    Post,
    User,
    Comment,
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
    editPost: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        const { title, body } = req.body;
        try {
            const post = await Post.update(
            {
              title,
              body,
            },
            {
              where: {
                id: req.params.postId,
              },
            });
             res.status(200).json(post);
          } catch (err) {
              res.status(500).json(err);
        };
    },

    getAllPosts: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const postsData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    }
                ],
                order:[
                    ["createdAt","DESC"]
                ]
            });
            const posts = postsData.map(post => post.get({ plain: true}));
            // res.json(posts);
            console.log(posts);
            res.render('allPosts', {
                posts,
            })
        } catch (e) {
            res.json(e);
        }
    },
    getPostById: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const postData = await Post.findOne({
                where: {
                    id: req.params.postId,
                },
                attributes: [
                    'id', 
                    'body', 
                    'title',
                    'createdAt'
                ],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Comment,
                        attributes: ['id', 'comment_text', 'postId', 'userId', 'createdAt'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    }
                ],
            });

            const post = postData.get({ plain: true });
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
            return res.redirect('/login');
        }
        res.render('createPost', {
            loggedInUser: req.session.user || null,
        });
    },
   
    allPostsView: (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/login');
        }
        res.render('allPosts')
    },

    homePosts: async (req, res) => {
        try {
            const postsData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                ],
                order:[
                    ["createdAt","DESC"]
                ],
                limit : 5,
            });
            const posts = postsData.map(post => post.get({ plain: true}));
            // res.json(posts);
            res.render('homepage', {
                posts,
                loggedInUser: req.session.user || null,
            })
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    },
    
  deletePost: async (req, res) => {
    try {
        await Comment.destroy({
            where: {
                postId: req.params.postId,
            }
        });
      const deletedPost = await Post.findByPk(req.params.postId);
      await Post.destroy({
        where: {
            id: req.params.postId,
        },
      });
      res.json({success});
    } catch (error) {
      res.json(error);
    }
  },
}