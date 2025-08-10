let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedValue = JSON.parse(greeting);

let greetTextE1 = document.getElementById("greetText");
let greetFromE1 = document.getElementById("greetFrom");
let greetToE1 = document.getElementById("greetTo");

greetTextE1.textContent = parsedValue.greetText;
greetFromE1.textContent = "From: " + parsedValue.from;
greetToE1.textContent = "To: " + parsedValue.to;