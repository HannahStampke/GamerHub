// Delete post function
const deletePost = async (button) => {

  const postId = button.getAttribute('data-postId')

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "delete",
    });
    // error message
    if (!response.ok) {
      const message = "Uh oh! " + response.status;
      throw new Error(message);
    }else{
        document.location.replace('/profile')
    }
    const data = await response.json();
    console.log(data);
    // catch error
  } catch (error) {
    console.log("Oh dear... " + error);
  }
};

// delete-post needs to be the the button name

if (document.addEventListener) {
  document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
  document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;

  // Climb up the document tree from the target of the event
  while (element) {
      if (element.nodeName === "BUTTON" ) {
          // The user clicked on a <button> or clicked on an element inside a <button>
          // with a class name called "foo"
          deletePost(element);
          break;
      }

      element = element.parentNode;
  }
}