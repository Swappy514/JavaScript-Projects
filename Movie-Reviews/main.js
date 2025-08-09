let reviewsContainerE1 = document.getElementById("reviewsContainer");
let titleInputE1 = document.getElementById("titleInput");
let reviewTextareaE1 = document.getElementById("reviewTextarea");

function onAddReview() {
    let movieTitle = titleInputE1.value;
    let movieReview = reviewTextareaE1.value;

    if (movieTitle === "") {
        alert("Please Enter The Movie Title");
        return;
    }

    // Create review card
    let movieTitleE1 = document.createElement("h1");
    movieTitleE1.textContent = "Movie Title: " + movieTitle;
    movieTitleE1.classList.add("movie-title");
    reviewsContainerE1.appendChild(movieTitleE1);

    let movieReviewE1 = document.createElement("p");
    movieReviewE1.textContent = "Review: " + movieReview;
    reviewsContainerE1.appendChild(movieReviewE1);

    let horizontalLineE1 = document.createElement("hr");
    reviewsContainerE1.appendChild(horizontalLineE1);

    // Reset form fields
    titleInputE1.value = "";
    reviewTextareaE1.value = "";
}
