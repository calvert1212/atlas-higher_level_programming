#!/usr/bin/node
// Reads the contents of a file

const fServer = require('fs');
const file = process.argv[2];
fServer.readFile(file, 'utf-8', function (error, content) {
  if (error) {
    console.error(error);
  } else {
    console.log(content);
  }
});