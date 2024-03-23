#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
function fact(a) {
  let f = parseInt(a);
  if (isNaN(f) || f <= 0) {
    return 1;  
    } else {
        return (f * fact(f - 1));
  }
}
  
const a = process.argv[2];
console.log(fact(a));
  