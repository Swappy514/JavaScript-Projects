let petsImageUrls = {
    dog: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

let petSelect = document.getElementById("petSelect");
let petImg = document.getElementById("petImg");

petSelect.addEventListener("change", function(event) {
    let selectedPet = event.target.value;
    let selectedPetImgUrl = petsImageUrls[selectedPet];
    petImg.src = selectedPetImgUrl;
});