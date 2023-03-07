/* PHOTO COPY */
const victim = document.querySelector('#cards article');
for (const photo of photosArray) {
  const clone = victim.cloneNode(true);
  document.querySelector('#cards').append(clone);
  clone.querySelector('h3').innerText = photo.name;
  clone.querySelector('h4').innerText = photo.price;
  clone.querySelector('img').src = photo.imgUrl;
  // here we are allowed to use any condition
  // the logic will always be based on the DATA (photo)
  if (photo.bestSeller) {
    clone.classList.add('best');
  } else {
    clone.querySelector('.seller').remove();
  }
}
victim.remove();

/* COMMENT CLONES */
const liTemplate = document.querySelector('#coms li');
for (const comment of comments) {
  const cloneComment = liTemplate.cloneNode(true);
  document.querySelector('#coms').append(cloneComment);
  cloneComment.querySelector('p').innerText = comment.message;
  let friendUrl = 'images/' + comment.user + '.png';
  friendUrl = `images/${comment.user}.png`;
  cloneComment.querySelector('img').src = friendUrl;
}
