const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            // showLoginAlerts()
        }
    }
};

const showLoginAlerts = async () => {
    document.getElementById('bootstrap-alert-login').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert-login').style.display = 'none'}, 1700);
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // TODO: validate form with login form in login.handlebars
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // TODO: Added extra const variables for signup information ... DEFINITELY NEED TO CHECK
    const xbox_id = document.querySelector('#xbox-id').value.trim();
    const psn_id = document.querySelector('#psn-id').value.trim();
    const discord_id = document.querySelector('#discord-id').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, xbox_id, psn_id, discord_id, }), // send all fields from above
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            // showSignupAlerts()
        }
    }
};

function showSignupAlerts(){
    document.getElementById('bootstrap-alert-signup').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert-signup').style.display = 'none'}, 1700);
  };


document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);