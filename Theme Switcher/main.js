let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

themeUserInputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let theme = themeUserInputEl.value.trim();

        if (theme === "Light") {
            bgContainerEl.style.backgroundImage =
                'url("https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';
            headingEl.style.color = "#014d40";
            
        } else if (theme === "Dark") {
            bgContainerEl.style.backgroundImage =
                'url("https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
            headingEl.style.color = "white";
        } else {
            alert("Please enter a valid theme");
        }
    }
});
