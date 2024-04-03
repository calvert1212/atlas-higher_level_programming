$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', (content) => {
  $('DIV#hello').text(content.hello);
});
