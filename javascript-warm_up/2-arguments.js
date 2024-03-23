#!/usr/bin/node
// Prints message based on number of args
function printArgs(args) {
const aleng = arguments.length;

if (aleng === 0) {
    console.log("No arguments");
} else if (aleng === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
}

// Calls function
printArgs();
