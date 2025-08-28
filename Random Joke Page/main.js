let jokeTextE1 = document.getElementById("jokeText");
let jokeBtnE1 = document.getElementById("jokeBtn");
let spinnerE1 = document.getElementById("spinner");

let options = {
    method: "GET"
};

function getjoke() {
    spinnerE1.classList.remove("d-none");
    jokeTextE1.textContent = "";

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerE1.classList.add("d-none");
            jokeTextE1.textContent = jsonData.value;
        })
}
jokeBtnE1.addEventListener("click", getjoke);