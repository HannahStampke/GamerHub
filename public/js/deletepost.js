
// Delete post function
const deletePost = async (event) => {
    event.preventDefault();
    // Get the post ID
    const postId = event.target.id;
    // Delete the identified post
    try {
        const response = await fetch(`/api/posts/${postId}`, {
            method: "delete",
            
        });
        // error message
        if (!response.ok) {
            showErrorAlerts()
        }
        const data = await response.json();
        console.log(data);
        showDeletePostAlerts()
    // catch error
    } catch (error) {
        showErrorAlerts()
        }
    };

function showDeletePostAlerts(){
    document.getElementById('bootstrap-alert-delete').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert-delete').style.display = 'none'}, 1700);
};
    
function showErrorAlerts(){
    document.getElementById('bootstrap-alert-error').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert-error').style.display = 'none'}, 1700);
};

// delete-post needs to be the the button name
document.querySelector("#delete-post").addEventListener("click", deletePost);