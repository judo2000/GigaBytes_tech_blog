const {
    Comment,
} = require('../models');

module.exports = {
    createComment: async(req, res) => {
        const { comment_text, postId, userId, }= req.body;
        try {
            const newComment = await Comment.create({
                comment_text,
                postId,
                //userId,
                userId: req.session.user.id,
            });
            res.json({ newComment });
        } catch (e) {
            res.json(e);
        }
    },
    getAllComments: async (req, res) => {
        try {
            const commentsData = await Comment.findAll({
                order:[
                    ["createdAt","ASC"]
                ],
            });
            const comments = commentsData.map(comment => comment.get({ plain: true}));
            res.json(comments);
        } catch (e) {
            res.json(w);
        }
    }
};