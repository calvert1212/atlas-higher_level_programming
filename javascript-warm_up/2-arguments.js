#!/usr/bin/node
// Prints message based on number of args
let alen = arguments.length;
if (alen < 1){
console.log('No argument');
} else if (alen < 2){
    console.log('Argument found');
} else if (alen <= 2) {
    console.log('Arguments found');
}
