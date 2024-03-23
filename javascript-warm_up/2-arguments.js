#!/usr/bin/node
// Prints message based on number of args
if (arguments.length < 1){
console.log('No argument');
} else if (arguments.length < 2){
    console.log('Argument found');
} else if (arguments.length <= 2) {
    console.log('Arguments found');
}
