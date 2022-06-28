// Delete post function
const deletePost = async (button) => {
  const postId = button.getAttribute("data-postId");

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "delete",
    });
    // error message
    if (!response.ok) {
      const message = "Uh oh! " + response.status;
      throw new Error(message);
    } else {
      document.location.replace("/profile");
    }

    // showDeletePostAlerts();
    // catch error
  } catch (error) {
    // showErrorAlerts();
    console.log("Oh dear... " + error);
  }
};

function showDeletePostAlerts() {
  document.getElementById("bootstrap-alert-delete").style.display = "block";
  setTimeout(function () {
    document.getElementById("bootstrap-alert-delete").style.display = "none";
  }, 1700);
}

function showErrorAlerts() {
  document.getElementById("bootstrap-alert-error").style.display = "block";
  setTimeout(function () {
    document.getElementById("bootstrap-alert-error").style.display = "none";
  }, 1700);
}


// if statement to assign event listeners to all dynamically loaded elements
if (document.addEventListener) {
  document.addEventListener("click", handleClick, false);
} else if (document.attachEvent) {
  document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;

  // Climb up the document tree from the target of the event
  while (element) {
    if (element.nodeName === "BUTTON" && element.id === "delete-post") {
      // The user clicked on a <button> or clicked on an element inside a <button>
      // with id "delete-post"

      // if all criteria is met then delete the selected post
      deletePost(element);
      break;
    }

    element = element.parentNode;
  }
}
