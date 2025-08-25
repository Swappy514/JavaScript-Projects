let twentySecondsBtnE1 = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnE1 = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnE1 = document.getElementById("fortySecondsBtn");
let oneMinuteBtnE1 = document.getElementById("oneMinuteBtn");
let timerTextE1 = document.getElementById("timerText");

let timerId;

function startTimer(seconds) {
    clearInterval(timerId);
    let timeleft = seconds;
    timerTextE1.textContent = timeleft + " seconds left";
    
    timerId = setInterval(function() {
        timeleft--;
        if (timeleft > 0) {
            timerTextE1.textContent = timeleft + " seconds left";
        } else {
            clearInterval(timerId);
            timerTextE1.textContent = "Your moment is complete";
        }
    }, 1000);
}

twentySecondsBtnE1.addEventListener("click", function () {
    startTimer(20);
});
thirtySecondsBtnE1.addEventListener("click", function(){
    startTimer(30);
});
fortySecondsBtnE1.addEventListener("click", function() {
    startTimer(40);
});
oneMinuteBtnE1.addEventListener("click", function() {
    startTimer(60);
}); 