#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
const a = process.argv[2],b = process.argv[3];
function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('NaN')
  } else {
  const c = Number(a) + Number(b);
  console.log(parseInt(c));
  }
}
add();
