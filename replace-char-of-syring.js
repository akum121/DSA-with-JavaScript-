const prompt = require('prompt-sync')()

let string = prompt(` Enter string : `);

const firstinput = prompt('Enter a  character from string which you want to change : ');

const secondinput = prompt(`Enter new Character which replace first word : `)

let newstring = string.split(firstinput).join(secondinput);

console.log(`${newstring}`);