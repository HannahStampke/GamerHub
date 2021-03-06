// function to show the edit profile form only if the user clicks on the edit profile button
const showEditForm = async (event) => {
  event.preventDefault();
  const profileBox = document.querySelector("#info-div");
  const formBox = document.querySelector("#form-div");

  profileBox.classList.add("hide");
  formBox.classList.remove("hide");
};

// function to edit profile of the user with the form data
const editProfile = async () => {

  // get all form data
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const discord_id = document.getElementById("discord_id").value;
  const psn_id = document.getElementById("psn_id").value;
  const xbox_id = document.getElementById("xbox_id").value;

  // make API call to edit user profile
  const response = await fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      discord_id: discord_id,
      psn_id: psn_id,
      xbox_id: xbox_id,
    }),
  });

  if (response.ok) {
    // bootstrap alert user edited
    // showEditPostAlerts();
    // redirect to profile page
    document.location.replace("/profile");
  } else {
    // bootstrap alert for error
    // showErrorAlerts();
    // redirect to profile page
    document.location.replace("/");
  }
};

document.querySelector("#edit-form").addEventListener("submit", editProfile);
document.querySelector("#edit-profile").addEventListener("click", showEditForm);

function showEditPostAlerts() {
  document.getElementById("bootstrap-alert-edit-post").style.display = "block";
  setTimeout(function () {
    document.getElementById("bootstrap-alert-edit-post").style.display = "none";
  }, 1700);
}

function showErrorAlerts() {
  document.getElementById("bootstrap-alert-error").style.display = "block";
  setTimeout(function () {
    document.getElementById("bootstrap-alert-error").style.display = "none";
  }, 1700);
}
