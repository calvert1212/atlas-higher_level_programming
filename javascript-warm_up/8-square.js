#!/usr/bin/node
// Prints square of argv2 by argv2 X's
const square = process.argv[2];
for (let i = square; i > 0; i--) {
  console.log('X' * square);
}