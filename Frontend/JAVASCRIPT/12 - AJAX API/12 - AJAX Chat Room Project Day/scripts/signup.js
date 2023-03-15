const baseUrl = 'https://chat-api-course.onrender.com';
//POST [USERS]
// "username"
// "password"
// "image"
// on submit


 $('form').on('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  // retreive the data
  const usernameValue = $('#username').val();
  const passwordValue = $('#password').val();
  const imageValue = $('#image').val();
  // control/logic ... >6
  // feedback
  $.ajax({
    method: 'POST',
    url: baseUrl + '/users',
    data: {
      username: usernameValue,
      password: passwordValue,
      image: imageValue,
    },
  }).done(function (response) {
    console.log(response);
    alert(response.data);
    if (response.data && response.data.hash) {
      //https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
      console.log(response.data.hash);
      localStorage.setItem('hash', response.data.hash);
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('image', response.data.image);
    
      // when submit redirect you to the index.html page
      //window.location.replace(
       // exemple of your root 
       //'file:///C:/Users/.........../........./1%20-%20Ajax/index.html'
      //);
    }
  });
}