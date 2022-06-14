


async function signupFormHandler(event) {
    event.preventDefault();

    // collect username and password from form
    const user_name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();;

    // conditional to ensure that all fields have values before making the post request
    if (user_name && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                user_name,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        //check response status
        if (response.ok) {
            // log user in and redirect to homepage after signing up
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({
                    user_name,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }

        } else {
            alert(response.statusText)
        }
    }
}

async function loginFormHandler(event) {

    event.preventDefault();

    const user_name = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // conditional to ensure that all fields have values before making the post request
    if (user_name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                user_name,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
