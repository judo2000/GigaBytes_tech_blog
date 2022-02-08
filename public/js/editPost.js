// const editPostBtn = document.querySelector('#editPostBtn')
// async function editFormHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('input[name="post-title"]').value;
//     const post_text = document.querySelector('textarea[name="post-body"]').value;
//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//       ];

//     const response = await fetch(`/api/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             title,
//             post_text
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//       });
      
//       if (response.ok) {
//         document.location.replace('/dashboard/');
//       } else {
//         alert(response.statusText);
//       }
  
// }

// editPostBtn.addEventListener('click', editFormHandler());
// //document.querySelector('.edit-post').addEventListener('click', editFormHandler);