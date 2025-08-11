let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let valuesToStringify = [bikes, person, todos];
let jsonContainerE1 = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue) {
    let valueContainerE1 = document.createElement("div");
    valueContainerE1.classList.add("value-container");
    jsonContainerE1.appendChild(valueContainerE1);
    
    let valueE1 = document.createElement("span");
    valueE1.textContent = stringifiedValue;
    valueE1.classList.add("value");
    valueContainerE1.appendChild(valueE1);
}

function convertToJSONString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

for (let value of valuesToStringify) {
    convertToJSONString(value);
}