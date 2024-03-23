#!/usr/bin/node
// Prints square of argv2 by argv2 X's
const square = parseInt(process.argv[2]);
if (isNaN(square)) {
  console.log('Missing size')
} else {
for (let i = square; i > 0; i--) {
  console.log('X'.repeat(square));
}
}
