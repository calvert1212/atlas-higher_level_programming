#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
function add (a, b) {
    const c = Number(a) + Number(b);
    return c;
 }
  
  const a = process.argv[2];
  const b = process.argv[3];
  
  if (isNaN(a) || isNaN(b)) {
    console.log('NaN');
 } else {
    console.log(add(a, b));
 }