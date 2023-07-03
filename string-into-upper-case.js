// Program to Convert the First Letter of a String into UpperCase

const prompt = require('prompt-sync')()

let userInput = prompt("Enter a string: ");

function UpperCase(userInput){
    
    return userInput.charAt(0).toUpperCase() + userInput.slice(1);
    
}

const capitalizedString = UpperCase(userInput);
console.log(capitalizedString);