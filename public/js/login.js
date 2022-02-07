$(document).ready(function() {
    const emailField = $('#emailField');
    const passwordField = $('#passwordField');
    const signinBtn = $('#signinBtn');
    const logoutBtn = $('#logout');
    signinBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/users/login', {
            email: emailField.val().trim(),
            password: passwordField.val().trim(),
        });
        window.location.href = '/';
    });
    logoutBtn.on('click', async function() {
        console.log(logoutBtn);
        await $.post('/users/logout');
        window.location.href = '/';
    });
});