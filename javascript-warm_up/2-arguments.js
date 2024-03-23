#!/usr/bin/node
// Prints message based on number of args
if (args.length < 1){
console.log('No argument');
} else if (args.length < 2){
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
