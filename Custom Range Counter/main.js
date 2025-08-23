let fromUserInputE1 = document.getElementById("fromUserInput");
let toUserInputE1 = document.getElementById("toUserInput");
let counterTextE1 = document.getElementById("counterText");
let startBtnE1 = document.getElementById("startBtn");

startBtnE1.addEventListener("click", function() {
    let fromValue = fromUserInputE1.value;
    let toValue = toUserInputE1.value;
    
    if (fromValue === ""){
        alert("Enter the From Value");
        return;
    }
    if (toValue === ""){
        alert("Enter the To Value");    
        return;
    }
    
    fromValue = Number(fromValue);
    toValue = Number(toValue);
    
    let current = fromValue;
    counterTextE1.textContent = current;
    
    let intervalId = setInterval(function() {
        current++;
        if (current > toValue) {
            clearInterval(intervalId);
        } else {
            counterTextE1.textContent = current;
        }
    }, 1000);
});
