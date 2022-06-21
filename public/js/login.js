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
            // TODO: bootstrap alert here
            <script html>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Wrong username or password!</strong> Give it another shot...
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </script>
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // TODO: validate form with login form in login.handlebars
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // TODO: Added extra const variables for signup information ... DEFINITELY NEED TO CHECK
    const platform = document.querySelector('#platform').value.trim();
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
            // TODO: bootstrap alert here
            $('button#alertshow').on('click', function() {
                var msg_type = $("#msgtype").val();
                ShowAlert(msg_type, 'Message Content', msg_type);
              });
            
            
              function ShowAlert(msg_title, msg_body, msg_type) {
                var AlertMsg = $('div[role="alert"]');
                $(AlertMsg).find('strong').html(msg_title);
                $(AlertMsg).find('p').html(msg_body);
                $(AlertMsg).removeAttr('class');
                $(AlertMsg).addClass('alert alert-' + msg_type);
                $(AlertMsg).show();
              }

            // $('.btn.danger').button('toggle').addClass('fat')(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);