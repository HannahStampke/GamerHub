const viewMoreGames = async (event) => {
    event.preventDefault();

    console.log(event.target)

} 

document.querySelector("#more-games").addEventListener("click", viewMoreGames);
