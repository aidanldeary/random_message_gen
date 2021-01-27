// Aidan Deary
// 26-01-2021
// Random Message Generator
//
// require modules: random message json
var msgs = require(process.cwd() + "/randomMessages.js");
// declare all functions 
const random_num_generator = () => {
    // generate random number between 0 and 10
    var rand_num = Math.floor(2 * Math.random());
    return rand_num;
}
const get_random_message = (rand_num) => {
    // fetch random message from object at index of rand num
    var message = msgs[rand_num.toString()];
    return message;
}
// declare input request function
const prompt = require('prompt-sync')({sigint: true});
// user inputs
const name = prompt('Enter your name:');
console.log(`Welcome ${name}`);
const ready = prompt("Hit enter when you are ready.");
// call functions
if (ready == "")
{
    var index = random_num_generator();
    var message = get_random_message(index);
    console.log(message);
} 