const prompt = require('prompt-sync')()
var n;
n = parseInt(prompt("Enter the number = "));
if(n % 2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}