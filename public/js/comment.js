$(document).ready(function() {
    const commentField = $('#commentField');
    const commentBtn = $('#commentBtn');

    commentBtn.on('click', async function(event) {
        event.preventDefault();
        const postId = window.location.toString().split('/')[
            window.location.toString().split('/').length -1
        ];
        
        await $.post('/api/comments', {
            comment_text: commentField.val().trim(),
            postId,
        });
        window.location.href = `/posts/${postId}`;
    });
});