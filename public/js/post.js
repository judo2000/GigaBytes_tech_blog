$(document).ready(function() {
    const titleField = $('#title');
    const bodyField = $('#body');
    const newPostBtn = $('#newPostBtn');
    const editedTitle = $('#editTitle');
    const editedBody = $('#editBody');
    const editPostBtn = $('#editPostBtn');
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
        //    const response = await fetch(`/api/posts/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         title,
        //         body,
        //     }),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
        
        //   // TODO: What happens if the response is ok?
        //   if (response.ok) {
        //     document.location.replace(`/posts/${id}`);
        //   } else {
        //     alert('Failed to edit dish');
        //   }


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
    // logoutBtn.on('click', async function() {
    //     console.log(logoutBtn);
    //     await $.post('/users/logout');
    //     window.location.href = '/';
    // });
});