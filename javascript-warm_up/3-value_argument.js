#!/usr/bin/node
// Prints first arg passed, if none "none"
if(process.argv[2]) {
  console.log(process.argv[2]);
} else {
  console.log('No argument');
}
