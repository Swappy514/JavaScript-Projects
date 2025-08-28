let searchInputE1 = document.getElementById("searchInput");
let resultCountriesE1 = document.getElementById("resultCountries");
let spinnerE1 = document.getElementById("spinner");

let countriesData = [];

function createAndAppendCountryCard(country) {
    let colE1 = document.createElement("div");
    colE1.classList.add("col-12", "col-md-6", "col-lg-4");
    resultCountriesE1.appendChild(colE1);

    let cardE1 = document.createElement("div");
    cardE1.classList.add("country-card", "d-flex", "flex-row", "align-items-center");
    colE1.appendChild(cardE1);

    let imgE1 = document.createElement("img");
    imgE1.classList.add("country-flag", "mr-3");
    imgE1.src = country.flag;
    imgE1.alt = country.name;
    cardE1.appendChild(imgE1);

    let detailsE1 = document.createElement("div");
    cardE1.appendChild(detailsE1);

    let nameE1 = document.createElement("h1");
    nameE1.classList.add("country-name");
    nameE1.textContent = country.name;
    detailsE1.appendChild(nameE1);

    let populationE1 = document.createElement("p");
    populationE1.classList.add("country-population");
    populationE1.textContent = country.population;
    detailsE1.appendChild(populationE1);

}

function displayCountries(countries) {
    resultCountriesE1.textContent = "";
    for (let country of countries) {
        createAndAppendCountryCard(country);
    }
}

function getCountriesData() {
    spinnerE1.classList.remove("d-none");

    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/countries-data", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerE1.classList.add("d-none");
            countriesData = jsonData;
            displayCountries(countriesData);
        });
}
getCountriesData();

function filterCountries(event) {
    let searchValue = event.target.value.toLowerCase();
    let filterCountries = countriesData.filter(function(country) {
        return country.name.toLowerCase().includes(searchValue);
    });
    displayCountries(filterCountries);
}
searchInputE1.addEventListener("input", filterCountries);