#!/usr/bin/node
// Prints # of movies where "Wedge" appears

const request = require('request');
const movieId = process.argv[2];
const website = 'https://swapi-api.hbtn.io/api/films/' + movieId;
request(website, function (error, _response, body) {
  if (!movieId){
    process.exit(1);
  }
  if (error) {
    console.error(error);
  } else {
    const jsonReturn = JSON.parse(body);
    console.log(jsonReturn.title);
  }
});
