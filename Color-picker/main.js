let backgroundColor = document.getElementById("colorPickerContainer");
let changeHexCode = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText(){
    colorPickerContainer.style.backgroundColor = "#e3dbdb";
    selectedColorHexCode.textContent = "#e3dbdb";
}

function changeBgToGreenAndUpdateText(){
    colorPickerContainer.style.backgroundColor = "#51f495";
    selectedColorHexCode.textContent = "#51f495";
}

function changeBgToBlueAndUpdateText() {  
  colorPickerContainer.style.backgroundColor = "#69d4f8";
  selectedColorHexCode.textContent = "#69d4f8";
}

function changeBgToPurpleAndUpdateText() {
  colorPickerContainer.style.backgroundColor = "#d472f8";
  selectedColorHexCode.textContent = "#d472f8";
}