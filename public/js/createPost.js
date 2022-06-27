const createPost = async () => {
    const postText = document.getElementById("postText").value;
    const game = document.getElementById("game").value;
    const platform = document.getElementById("platform").value;
    const sessionTime = document.getElementById("sessionTime").value;
    const gamerLevel = document.getElementById("gamerLevel").value;
    const intensity = document.getElementById("intensity").value;

    const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post_text: postText,
            game_id: game,
            platform_id: platform,
            session_time: sessionTime,
            gamer_level: gamerLevel,
            intensity: intensity,
        }),
    });

    if (response.ok) {
        // bootstrap alert user edited
        showCreatePostAlerts();
            // redirect to game page
        document.location.replace(`/${game}`);
    } else {
        // bootstrap alert for error
        showErrorAlerts();
        // redirect to profile page
        document.location.replace('/');
    };
};

function showCreatePostAlerts(){
    document.getElementById('bootstrap-alert-create').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert-create').style.display = 'none'}, 1700);
};

function showErrorAlerts(){
    document.getElementById('bootstrap-alert-error').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert-error').style.display = 'none'}, 1700);
};

document.querySelector("#create-post-form").addEventListener("submit", createPost);