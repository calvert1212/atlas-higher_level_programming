#!/usr/bin/node
// Prints first arg passed, if none "none"
if(process.argv0) {
  console.log(process.argv0);
} else {
  console.log('No argument');
}
