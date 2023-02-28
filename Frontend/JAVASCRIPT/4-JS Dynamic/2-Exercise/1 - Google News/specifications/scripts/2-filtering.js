// Create an Event listener that will listen to "submit" for form submission
//e.preventDefault();
// hide all <article>
// retrieve value
// get filtered <article> elements with the good class ...
// show the filtered <article>

document
  .querySelector('[type="submit"]')
  .addEventListener("click", function () {
    hideAll();
  });

function hideAll() {
  const allArticles = document.querySelectorAll("article");

  const inputValue = document.querySelector("option");
  const optionValue = inputValue.value;

  console.log(optionValue);

  for (const articleHTML of allArticles) {
    if (optionValue == "all") {
      articleHTML.style.display = "none";
    } else if (optionValue == "science") {
        
      articleHTML.style.display = "";
    }
  }
}
