const editProfile = async () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const platform = document.getElementById("platform");
  const discord_id = document.getElementById("discord_id").value;
  const psn_id = document.getElementById("psn_id").value;
  const xbox_id = document.getElementById("xbox_id").value;

  const response = await fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      platform_id: platform,
      discord_id: discord_id,
      psn_id: psn_id,
      xbox_id: xbox_id,
    }),
  });

  if (response.ok) {
    // bootstrap alert user edited
    // redirect to profile page
  } else {
    // bootstrap alert for error
    // redirect to profile page
    alert(response.statusText)
  }
};

document.querySelector("#edit-profile-form").addEventListener("submit", editProfile);