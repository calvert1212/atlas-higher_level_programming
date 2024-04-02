#!/usr/bin/node
// Prints # of movies where "Wedge" appears

const request = require('request');
const mId = process.argv[2];
const wF = 'https://swapi-api.hbtn.io/api/people/18/';

request(mId, function (error, response, body) {
  if (!mId || error) {
    console.error(error);
  } else {
    const fD = JSON.parse(body);
    const w = fD.results.filter(film => film.characters.includes(wF));
    console.log(w.length);
  }
});
