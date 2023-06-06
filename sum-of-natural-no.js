const prompt = require('prompt-sync')()

let num = prompt("Enter the value of num = ");

    let res = 0;
    for (let i = 1; i <= num; i++) {
        res = res + i;
    }

console.log(`res = ${res}`);