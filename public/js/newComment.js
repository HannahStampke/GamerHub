// function to do create a new comment and store in the database
const createComment = async (event) => {
    event.preventDefault();
    // get the comment text from front end form
    const commentText = document.getElementById("comment-text").value;
    // Get the post ID
    const postId = document.location.pathname.split('/')[2]


    // Create the body of the comment (post ID and comment text)
    const response = await fetch(`/api/comments/`, {
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
        // send the user back to the post page
        document.location.replace(`/posts/${postId}`)
    }
    // Alert user if not successful and redirect to profile page
    else {
        // bootstrap alert for error
        // alert(response.statusText)
    }
    
}

document.querySelector("#comment-form").addEventListener("submit", createComment);