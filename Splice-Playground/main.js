let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

function convertArrtoJSONStringAndAppend() {
    const stringifiedArr = JSON.stringify(arr);
    updatedArray.textContent = stringifiedArr;
}

convertArrtoJSONStringAndAppend();

spliceBtn.onclick = function spliceArray() {
    let startIndex = startIndexInput.value;
    let deleteCount = deleteCountInput.value;
    let itemToAdd = itemToAddInput.value;

    if (startIndex === "") {
        alert("Please enter the start index");
        return;
    }

    // If deleteCount is empty, set it to 0
    if (deleteCount === "") {
        deleteCount = 0;
    }

    // Convert to correct types
    startIndex = parseInt(startIndex);
    deleteCount = parseInt(deleteCount);

    // If itemToAdd is provided, include it in splice
    if (itemToAdd === "") {
        arr.splice(startIndex, deleteCount);
    } else {
        arr.splice(startIndex, deleteCount, itemToAdd);
    }

    startIndexInput.value = "";
    deleteCountInput.value = "";
    itemToAddInput.value = "";
    convertArrtoJSONStringAndAppend();
};