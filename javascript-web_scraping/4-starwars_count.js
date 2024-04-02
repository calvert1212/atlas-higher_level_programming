#!/usr/bin/node
// Prints # of movies where "Wedge" appears

const request = require('request');
const mId = process.argv[2];
const site = 'https://swapi-api.hbtn.io/api/films/' + mId;
const wF = 'https://swapi-api.hbtn.io/api/people/18/';

request(site, function (error, _response, body) {
  if (!mId) {
    process.exit(1);
  }
  if (error) {
    console.error(error);
  } else {
    const fD = JSON.parse(body);
    const w = fD.results.filter(film => film.characters.includes(wF));
    console.log(w);
  }
});
