const baseUrl = 'https://chat-api-course.onrender.com';
//Post [user]
//'username'
//'password'
//'image'
// on submit

$('form').on('submit', submitHandler);

function submitHandler (e) {
    e.preventDefault();
    const userNameValue = $('#username').val();
    const passwordValue = $('#password').val();
    const imageValue = $('#image').val();

    //controls / logic : length > 6 etc ...
    $.ajax({
        method: 'POST',
        url: baseUrl + '/users',
        body: {
            username: userNameValue,
            password: passwordValue,
            image: imageValue,
        },
    }).done(function (response) {
        console.log(response);
        if (response.body && response.body.hash) {
            localStorage.setItem('hash', response.body.hash);
            localStorage.setItem('id', response.body.id);
            localStorage.setItem('image', response.body.image);
        }
    })
}