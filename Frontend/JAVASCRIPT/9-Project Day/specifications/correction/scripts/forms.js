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
    alert('You were not able to type at least 3 chars.');
  }
});
