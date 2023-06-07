const prompt = require('prompt-sync')()

let a = parseInt(prompt("Enter the value of a = "));
let b = parseInt(prompt("Enter the value of b = "));

// let sum = a+b;
// console.log(sum);

function add(a,b){
    return a+b;
};

console.log(add(a,b));