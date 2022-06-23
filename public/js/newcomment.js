
const createComment = async (event) => {
    const commentText = document.getElementById("commentText").value;
    // Get the post ID
    const postId = event.target.postId;
    // Create the body of the comment (post ID and comment text)
    const response = await fetch(`/api/comments/${postId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment_text: commentText,
            post_id: postId,
        }),
    })
    // Alert user if successful
    if (response.ok) {
        // bootstrap alert user edited
    }
    // Alert user if not successful and redirect to profile page
    else {
        // bootstrap alert for error
        document.location.replace('/profile');
        alert(response.statusText)
    }
    
}

document.querySelector("#create-comment-form").addEventListener("submit", createComment);