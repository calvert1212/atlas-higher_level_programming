#!/usr/bin/node
// Prints message based on number of args
const aleng = process.argv.length - 2;
if (aleng < 1) {
  console.log('No argument');
} else if (aleng < 2) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
