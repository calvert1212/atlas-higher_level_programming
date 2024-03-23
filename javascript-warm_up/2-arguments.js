#!/usr/bin/node
// Prints message based on number of args
function printArgs(args) {
const alen = arguments.length;

if (alen < 1) {
    console.log("No arguments");
} else if (alen < 2) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
}

// Calls function
printArgs();
