const prompt = require('prompt-sync')()

let num1 = prompt("Enter the value of num 1 = ");
let num2 = prompt("Enter the value of num 2 = ");

const res1 = num1 % 10;
const res2 = num2 % 10;

if(res1 === res2){
    console.log(`${num1} and ${num2} have the same last digit.`);
}
else {
    console.log(`${num1} and ${num2} have different last digit.`);
}
