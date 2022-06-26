// Delete post function
const deletePost = async (event) => {
  event.preventDefault();
  // Delete the identified post

  const postId = event.target.getAttribute('data-postId')

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
document.querySelector("#delete-post").addEventListener("click", deletePost);
