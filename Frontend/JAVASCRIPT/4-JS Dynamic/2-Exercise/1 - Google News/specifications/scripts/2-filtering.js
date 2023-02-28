// Create an Event listener that will listen to "submit" for form submission
//e.preventDefault();
// hide all <article>
// retrieve value
// get filtered <article> elements with the good class ...
// show the filtered <article>

// MY part
// document
//   .querySelector('[type="submit"]')
//   .addEventListener("click", function () {
//     hideAll();
//   });

// function hideAll() {
//   const allArticles = document.querySelectorAll("article");

//   const inputValue = document.querySelector("#category");
//   const optionValue = inputValue.value;

// //   console.log(optionValue);
// //   document.write(optionValue);

//   for (const articleHTML of allArticles) {
//     if (optionValue == "all") {
//       articleHTML.style.display = "none";
//     } else if (optionValue == "science") {
//         // articleHTML.style.display = "";
//         // document.querySelectorAll('article.politics').style.display = "none";
//         const science = document.querySelectorAll('.science');
//         const politics = document.querySelectorAll('.politics');
//         science.style.display = "";
//         politics.style.display = "none";

//     } else if (optionValue == "politics") {
//         articleHTML.style.display = "";
//         document.querySelectorAll('article.science').style.display = "none";
//     }
//   }
// }

// 1-Form
document.querySelector("form").addEventListener("submit", function (event) {
  // 3- prevent
  event.preventDefault();
  // input/gather
  const catValue = document.querySelector("#category").value;
  //hide
  const allArticles = document.querySelectorAll("article");

  for (const element of allArticles) {
    element.style.display = "none";
  }
  // show
  // const selectedArticles = document.querySelectorAll('.' + catValue);
  let selectedArticles = document.getElementByClassName(catValue);
  if (catValue == "all") {
    selectedArticles = allArticles;
  }
  for (const element of selectedArticles) {
    element.style.display = "";
  }
});
