let wordCloud = [
  "Hello", "hii", "how", "what", "you", "yourself",
  "name", "victory", "food", "lovely", "beautiful",
  "written", "where", "who", "awesome"
];

// Get elements
let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

// Helper: create span with random font size
function createWordSpan(word) {
  let span = document.createElement("span");
  let fontSize = Math.floor(Math.random() * (40 - 15 + 1)) + 15; // 15–40px
  span.style.fontSize = fontSize + "px";
  span.textContent = word;
  span.classList.add("m-2"); // small spacing between words
  return span;
}

// Initial render
wordCloud.forEach(word => {
  wordsContainer.appendChild(createWordSpan(word));
});

// Add new word
addBtn.addEventListener("click", () => {
  let text = userInput.value.trim();
  if (text === "") {
    errorMsg.textContent = "Please enter a word";
  } else {
    errorMsg.textContent = "";
    wordsContainer.appendChild(createWordSpan(text));
    userInput.value = "";
  }
});
