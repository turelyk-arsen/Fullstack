/*
BONUS : to make this even more interactive a list of category can replace the form submission
uncomment this part of the HTML code
and start working on the buttons
*/

// The function "filterArticles" will:
// remove the CSS class "selected" FOR EACH of the links inside this list
// add the CSS class "selected" to the clicked link using this line
// filter the section articles using the algorythm from question 3(time for a function maybe ?)

// document
//   .querySelector("[name='politics']")
//   .addEventListener("click", function () {
//     hideAll();
//     showStuff("article.politics");
//   });

// document.querySelector('[name="all"]').addEventListener("click", function () {
//   showStuff("article");
// });

// function hideAll() {
//   const allArticles = document.querySelectorAll("article");
//   for (const element of allArticles) {
//     element.style.display = "none";
//   }
// }

// function showStuff(selector) {
//   const scienceArticle = document.querySelectorAll(selector);
//   for (const element of scienceArticle) {
//     element.style.display = "";
//   }
// }

document.querySelector('[name="politics"]')
    .addEventListener('click', function(){
        hideAll();
        showStuff('article.politics');
    });

    document.querySelector('[name="all"]')
        .addEventListener('click', function() {
            showStuff('artice');
        })
    function hideAll() {
        const allArticles = document.querySelectorAll('article');
        for (const element of allArticles){
            element.style.display = 'none';
        }
    }
    function showStuff(selector){
        const scienceArticle = document.querySelectorAll(selector);
        for( const element of scienceArticle){
            element.style.display = '';
        }
    }