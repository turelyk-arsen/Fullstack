// Vanilla JS
fetch('https://api.chucknorris.io/jokes/random')
.then(function (data) {
    return data.json();
})
.then(function (response) {
    console.log('Vanilla', response);
    const joke = response.value;
    document.querySelector('p#jokeJS').innerText = joke;
});

//JQuery
$.ajax({
    method: 'GET',
    url: 'https://api.chucknorris.io/jokes/random',
}).done(function (response) {
    console.log('JQUERY', response);
    const joke = response.value;
    $('p#jokeJQ').text(joke);
})