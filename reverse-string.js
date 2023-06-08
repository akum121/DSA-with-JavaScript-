const prompt = require('prompt-sync')()

let string = prompt(` Enter word sentance : `);

const splitstring = string.split(' ');

const reversstring = splitstring.reverse();

console.log(`After reverse ${reversstring}`);

