#!/usr/bin/node
// Reads the contents of a file

const fS = require('fs');
const file = process.argv[2];
const fCont = process.argv[3];
fS.writeFile(file, fCont, 'utf-8', function (error, content) {
  if (error) {
    console.error(error);
  }
});
