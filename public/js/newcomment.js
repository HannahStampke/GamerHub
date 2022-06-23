
const createComment = async (event) => {
    const commentText = document.getElementById("commentText").value;
    const postId = event.target.postId;
    

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

    if (response.ok) {
        // bootstrap alert user edited
    }
    else {
        // bootstrap alert for error
        // redirect to profile page
        alert(response.statusText)
    }
    
}

document.querySelector("#create-comment-form").addEventListener("submit", createComment);