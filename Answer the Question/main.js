let questionsFormE1 = document.getElementById("questionsForm");
let resultMsgE1 = document.getElementById("resultMsg");

let cityHyderabadE1 = document.getElementById("cityHyderabad");
let cityChennaiE1 = document.getElementById("cityChennai");
let cityDelhiE1 = document.getElementById("cityDelhi");
let cityMumbaiE1 = document.getElementById("cityMumbai");

let capitalCity = "Delhi";
let selectedCity = null;

cityHyderabadE1.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityChennaiE1.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityDelhiE1.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityMumbaiE1.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

questionsFormE1.addEventListener("submit", function(event) {
    event.preventDefault();

    if (selectedCity === null) {
        resultMsgE1.textContent = "Please select the answer!";
        resultMsgE1.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultMsgE1.textContent = "Correct answer!";
        resultMsgE1.style.color = "#2b9a40";
    } else {
        resultMsgE1.textContent = "Wrong answer";
        resultMsgE1.style.color = "#dc3545";
    }
});