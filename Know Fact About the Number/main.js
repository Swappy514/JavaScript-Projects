let userInputE1 = document.getElementById("userInput");
let factE1 = document.getElementById("fact");
let spinnerE1 = document.getElementById("spinner");

function getNumberFact(event) {
    if (event.key === "Enter") {
        let inputValue = userInputE1.value;

        if (inputValue === "") {
            alert("Please enter a number");
            return;
        }
        spinnerE1.classList.remove("d-none");
        factE1.textContent = "";

        let options = {
            method: "GEt"
        };
        fetch("https://apis.ccbp.in/numbers-fact?number=" + inputValue, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerE1.classList.add("d-none");
                factE1.textContent = jsonData.fact;
            });
    }
}
userInputE1.addEventListener("keydown", getNumberFact);