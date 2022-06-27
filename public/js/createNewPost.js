const createPost = async (event) => {
    event.preventDefault();
    const postText = document.getElementById("post-text").value;
    const gameId = document.getElementById("game-id").options.selectedIndex + 1;
    const platform = document.getElementById("platform-id").options.selectedIndex + 1;
    const sessionTime = document.getElementById("session-time").value;
    const gamerLevel = document.getElementById("gamer-level").value;
    const intensity = document.getElementById("intensity").value;

    const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post_text: postText,
            game_id: gameId,
            platform_id: platform,
            session_time: sessionTime,
            gamer_level: gamerLevel,
            intensity: intensity,
        }),
    })

    if (response.ok) {
        // bootstrap alert user edited
        // redirect to profile page
        document.location.replace(`/games/${gameId}`)
    }
    else {
        // bootstrap alert for error
        // redirect to profile page
    }
    
}

document.querySelector("#create-post-form").addEventListener("submit", createPost);