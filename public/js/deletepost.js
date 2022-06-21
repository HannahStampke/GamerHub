
// Delete post function
const deletePost = async (event) => {
    event.preventDefault();
    // Get the post ID
    const postId = event.target.id;
    // Delete the identified post
    try {
        const response = await fetch(`/api/posts/${postId}`, {
            method: "delete"
        });
        // error message
        if (!response.ok) {
            const message = 'Uh oh! ' + response.status;
            throw new Error(message);
        }
        const data = await response.json();
        console.log(data);
    // catch error
    } catch (error) {
        console.log('Oh dear... ' + err);
        }
    }

// delete-post needs to be the the button name
document.querySelector("#delete-post").addEventListener("click", deletePost);