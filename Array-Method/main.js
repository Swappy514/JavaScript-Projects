let arr = ["Study", 9, "Water", 5, "six", 8.2, "Gym"];

//findIndex()
let charIndex = arr.findIndex(function(eachChar){
    if (eachChar === "Water"){
        return true;
    } else {
        return false;
    }
});
console.log(charIndex);

//includes()
let existsArray = arr.includes("Study");
console.log(existsArray);
existsArray = arr.includes("seven");
console.log(existsArray);

//indexOf()
let foundIndex = arr.indexOf("six");
console.log(foundIndex);
foundIndex = arr.indexOf("seven");
console.log(foundIndex);

//lastIndexOf()
let lastIndex = arr.lastIndexOf("six");
console.log(lastIndex);
lastIndex = arr.lastIndexOf(9);
console.log(lastIndex);

//find()
let findItem = arr.find(function(eachItem) {
    if (eachItem === 9) {
        return true;
    } else {
        return false;
    }
});
console.log(findItem);

//unshift()
let addItem = arr.unshift("Learn", 18);
console.log(addItem);  //returns the new Array length

//shift()
let removesFirstItem = arr.shift();
console.log(removesFirstItem);

//concat()
let arr2 = ["Play", "Game", 27];
let newArray = arr.concat(arr2);
console.log(newArray);

//slice()
let sliceArray = arr.slice(2, 4);
console.log(sliceArray);

//join()
let combinedString = arr.join(",");
console.log(combinedString);

//sort()
arr.sort();
console.log(arr);
newArray.sort();
console.log(newArray);