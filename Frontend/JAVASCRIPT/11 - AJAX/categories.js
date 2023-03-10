fetch("https://api.chucknorris.io/jokes/categories")
  // the first line of code starts the AJAX call (using fetch method)
  // to the chuck norris joke website
  // to get the list of categories
  .then((data) => data.json())
  // this second line is waiting for the AJAX request to finish,
  // and when it does, it takes the response and turns it into a
  // format that JS can work with called JSON

  // third line of code waits for the JSON data to be ready,
  // and when it is, it runs a function that goes something with that data.
  // in this case, it handles the categories that were returned
  // from the chuck site
  // res = response
  .then(function (res) {
    console.log("congratulation, its a {add you response here}");
    console.log(res);
    // it contains information about the response the request

    // we want to know when the user click in the list
    // it shows a joke from that category
    const catArray = res;
    for (const category of catArray) {
      // 1. clone
      const clone = document.querySelector("li").cloneNode(true);
      // 2. append
      document.querySelector("ul").append(clone);
      // 3 customize
      clone.innerText = category;
      clone.addEventListener("click", function () {
        changeJoke(category);
      }); // AEL
    } // for
    document.querySelector('li').remove();
  }); // FETCH


    function changeJoke(category) {
        const customUrl = 'https://api.chucknorris.io/jokes/random?category=' + category;
        // it will add the category in AJAX call URL 
        // and fetch that specific category
        fetch(customUrl).then((data) => data.json())
        .then(function (res) {
            // console.group(res);
            // console.table(res);
            document.querySelector('p#jokeJS').innerText = res.value;
        })
    }
