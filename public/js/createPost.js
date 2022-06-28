// function to create new post from a game page
const createPost = async (event) => {
  event.preventDefault();
  const postText = document.getElementById("post-text").value;
  const gameId = parseInt(document.location.pathname.split("/")[2]);
  let platform = document.getElementById("platform-id").value;
  const sessionTime = document.getElementById("session-time").value;
  const gamerLevel = document.getElementById("gamer-level").value;
  const intensity = document.getElementById("intensity").value;

  console.log(postText);
  console.log(gameId);
  console.log(sessionTime);
  console.log(intensity);
  console.log(gamerLevel);
  console.log(platform);

  switch (platform) {
    case "PC":
      platform = 1;
      break;
    case "Playstation":
      platform = 2;
      break;
    case "Xbox":
      platform = 3;
      break;
    case "Nintendo":
      platform = 4;
      break;
    case "Other":
      platform = 5;
      break;
  }

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
  });

  if (response.ok) {
    // bootstrap alert user edited
    // showCreatePostAlerts();
    // redirect to game page
    document.location.replace(`/games/${gameId}`);
  } else {
    // bootstrap alert for error
    // showErrorAlerts();
    // redirect to profile page
    document.location.replace("/");
  }
};

function showCreatePostAlerts() {
  document.getElementById("bootstrap-alert-create").style.display = "block";
  setTimeout(function () {
    document.getElementById("bootstrap-alert-create").style.display = "none";
  }, 1700);
}

function showErrorAlerts() {
  document.getElementById("bootstrap-alert-error").style.display = "block";
  setTimeout(function () {
    document.getElementById("bootstrap-alert-error").style.display = "none";
  }, 1700);
}

document
  .querySelector("#create-post-form")
  .addEventListener("submit", createPost);
