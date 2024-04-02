#!/usr/bin/node
// Gets contents of webpage and stores it in a file

const fileServer = require('fs');
const request = require('request');
const website = process.argv[2];
const file = process.argv[3];
request(website).pipe(fileServer.createWriteStream(file));
