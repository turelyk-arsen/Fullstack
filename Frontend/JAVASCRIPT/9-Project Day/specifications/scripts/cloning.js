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
}
newCard.remove();

const modelComment = $("#coms li").eq(0);
for (const com of comments) {
  const comment = modelComment.clone();
  $("#coms").append(comment);

  comment.find("p").text(com.message);
  comment.find("img").attr("src", 'images/' + com.user + '.png');
}
modelComment.remove();