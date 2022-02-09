const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// users can make many posts 
User.hasMany(Post, {
    foreignKey: 'userId'
}); 

// a post can only belong to one user 
Post.belongsTo(User, {
    foreignKey: 'userId'
})

// a comment can only belong to one user 
Comment.belongsTo(User, {
    foreignKey: 'userId'
});

// a comment can only belong to one user 
Comment.belongsTo(Post, {
    foreignKey: 'postId',
    
});

// users can make many comments 
User.hasMany(Comment, {
    foreignKey: 'userId'
});

// users can make many posts 
Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'cascade'
});

module.exports = { User, Post, Comment };