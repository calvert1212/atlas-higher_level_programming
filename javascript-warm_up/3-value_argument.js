#!/usr/bin/node
// Prints first arg passed, if none "none"
if(process.argv1) {
  console.log(process.argv1);
} else {
  console.log('No argument');
}
