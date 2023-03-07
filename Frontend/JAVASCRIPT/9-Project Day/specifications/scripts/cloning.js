const newCard = $("#cards article").eq(0);
for (const photoData of photosArray) {
  const cloneCard = newCard.clone();
  $("#cards").append(cloneCard);

  // add from array
  cloneCard.find("img").attr("src", photoData.imgUrl);
  cloneCard.find("h3").text(photoData.name);
  cloneCard.find("h4").text(photoData.price);

  if (photoData.bestSeller) {
    cloneCard.addClass('true');
  } else {
    cloneCard.addClass('false');

    $(".false .seller").hide();


  }
  // cloneCard.addClass(photoData.bestSeller);
  // cloneCard.find('h3').addClass(photoData.bestSeller);
  // console.log(photoData.bestSeller)


  // hide all exept male
//   $(".female").hide();
//   $(".baby").hide();
}
newCard.remove();