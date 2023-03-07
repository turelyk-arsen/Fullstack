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
  friendUrl = `images/${comment.user}.png`; // same output different code then line 25
  cloneComment.querySelector('img').src = friendUrl;
}

/* FORM VERIFICATION */
const myTextArea = document.querySelector('#comment');
myTextArea.addEventListener('keyup', function () {
  const value = myTextArea.value;
  const lengthValid = value.length > 3;
  if (lengthValid) {
    myTextArea.style.border = '5px solid green';
  } else {
    myTextArea.style.border = '5px solid red';
  }
});

/* FORM SUBMISSION */
const myForm = document.querySelector('form');
myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // when all is good, the comment gets added to the others
  const value = myTextArea.value;
  const lengthValid = value.length > 3;
  if (lengthValid) {
    // clone the comment
    const clone = document.querySelector('#coms li').cloneNode(true);
    document.querySelector('#coms').append(clone);
    // customize it
    clone.querySelector('p').innerText = value;
    clone.querySelector('img').src = 'images/User.png';
    myForm.innerHTML = "You've alreay published a comment";
  } else {
    alert('You were not able to type at least 3 chars. Bitch.');
  }
});
