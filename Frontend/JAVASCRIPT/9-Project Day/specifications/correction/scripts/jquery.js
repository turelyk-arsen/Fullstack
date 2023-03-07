const bobafet = $('#cards article').eq(0);
for (const photo of photosArray) {
  const stormtrooper = bobafet.clone();
  $('#cards').append(stormtrooper);
  stormtrooper.find('h3').text(photo.name);
  stormtrooper.find('h4').text(photo.price);
  stormtrooper.find('img').attr('src', photo.imgUrl);
  if (photo.bestSeller) {
    stormtrooper.addClass('best');
  } else {
    stormtrooper.find('.seller').remove();
  }
}
