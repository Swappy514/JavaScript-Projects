let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

let storageKey = "userInput";

// Load existing value from localStorage
let storedValue = localStorage.getItem(storageKey);
if (storedValue !== null) {
  msgEl.value = storedValue;
}

// Save button functionality
saveBtnEl.onclick = function () {
  let text = msgEl.value;
  localStorage.setItem(storageKey, text);
};

// Clear button functionality
clearBtnEl.onclick = function () {
  msgEl.value = "";
  localStorage.removeItem(storageKey);
};
