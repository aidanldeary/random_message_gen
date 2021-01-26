// Aidan Deary
// 26-01-2021
// Random Message Generator
const prompt = require('prompt-sync')({sigint: true});
const name = prompt('Enter your name:');
console.log(`Hey there ${name}`);