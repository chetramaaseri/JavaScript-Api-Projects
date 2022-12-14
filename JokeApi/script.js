const jokeContainer = document.getElementById("joke-area");
const btn = document.getElementById("joke-btn");
const joke_url_api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = ()=>{
    jokeContainer.classList.remove("fade");
    fetch(joke_url_api)
    .then(data=> data.json())
    .then(item =>{
        console.log(item.joke);
        jokeContainer.textContent = `${item.joke};`
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click", getjoke);
getjoke();