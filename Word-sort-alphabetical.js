const prompt = require('prompt-sync')()

let userInput = prompt("Enter a list of values separated by commas:");

let inputArray = userInput.split(',');

for (var i = 0; i < inputArray.length; i++) {
  inputArray[i] = inputArray[i].trim();
}

console.log(inputArray);


inputArray.sort();

console.log(`After sort `);
console.log(`${inputArray}`);



