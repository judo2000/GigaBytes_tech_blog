$(document).ready(function() {
    const titleField = $('#title');
    const bodyField = $('#body');
    const newPostBtn = $('#newPostBtn');
    const editedTitle = $('#editTitle');
    const editedBody = $('#editBody');
    const editPostBtn = $('#editPostBtn');
    const deletePostId = $('#postId');
    const delPostBtn = $('#delPostBtn');
    

    newPostBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/posts', {
            title: titleField.val().trim(),
            body: bodyField.val().trim(),
        });
        window.location.href = '/dashboard';
    });
    editPostBtn.on('click', async function(event) {
        event.preventDefault();
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];
        await $.ajax({
            url: `/api/posts/${id}`,
            method: 'PUT',
            data: JSON.stringify({
                title: editedTitle.val().trim(),
                body: editedBody.val().trim(),
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        window.location.href = `/dashboard`;
    });
    delPostBtn.on('click', async function(event) {
        event.preventDefault();
         const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];
        await $.ajax({
            url: `/api/posts/${id}`,
            method: 'DELETE',
            data: JSON.stringify({
                id: id,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        window.location.href = `/dashboard`;
    });
});