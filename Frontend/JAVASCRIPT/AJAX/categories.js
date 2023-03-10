fetch ('https://api.chucknorris.io/jokes/categories')
// the first line of code starts the AJAX call (using fetch method)
// to the chuck norris joke website
// to get the list of categories
.then((data) => data.json())
// this second line is waiting for the AJAX request to finish,
// and when it does, it takes the response and turns it into a 
// format that JS can work with called JSON
.then(function (res) {
    console.log('congratulation, its a {add you response here}');
    console.log(res);
})
// third line of code waits for the JSON data to be ready,
// and when it is, it runs a function that goes something with that data.
// in this case, it handles the categories that were returned
// from the chuck site
// res = response