
const createComment = async () => {
    const commentText = document.getElementById("commentText").value;
    const username = document.getElementById("username").value;
    const timeOfComment = document.getElementById(" ").value;
    

    const response = await fetch(`/api/posts/${postId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_name: username,
            time_of_comment: timeOfComment,
            comment_text: commentText,
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