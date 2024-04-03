$.get('https://swapi-api.hbtn.io/api/films/?format=json', (content) => {
  const mv = content.results;
  for (const m in mv) {
    $('#list_movies').append('<li>' + mv[m].title + '</li>');
  }
});
