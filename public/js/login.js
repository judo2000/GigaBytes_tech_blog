
$(document).ready(function() {
    const emailField = $('#emailField');
    const passwordField = $('#passwordField');
    const loginError = $('#loginError')
    const signinBtn = $('#signinBtn');
    const logoutBtn = $('#logoutBtn');
    signinBtn.on('click', async function(event) {
        event.preventDefault();
        const email = emailField.val().trim();
        const password = passwordField.val().trim();
        if (email && password) {
            await $.post('/api/users/login', {
                email,
                password,
            })
            .then((response) => {
                location.href = '/dashboard';
            })

            .catch((error) => {
                loginError.text(error.responseJSON.error);
              });
            // if (!e) {
            //     location.href = '/dashboard';
            // }
             
        } else {
            loginError.text('Login error - Please check your email and password and try again.');
        }
    });
    logoutBtn.on('click', async function() {
        console.log(logoutBtn);
        await $.post('/api/users/logout');
        window.location.href = '/';
    });
});