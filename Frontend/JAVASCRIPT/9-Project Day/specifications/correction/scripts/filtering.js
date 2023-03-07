// ALL need to show all the photo articles
const buttonAll = document.querySelector('button#all');
buttonAll.addEventListener('click', function () {
  const allHTMLArticles = document.querySelectorAll('article');
  for (const articleHTML of allHTMLArticles) {
    articleHTML.style.display = 'block'; // block is the default display, it shows the article
  }
});

//  Best Seller will hide all the article and show only the best selling ones
const buttonBestSeller = document.querySelector('button#best');
buttonBestSeller.addEventListener('click', function () {
  // Hide all the articles
  const allHTMLArticles = document.querySelectorAll('article');
  for (const articleHTML of allHTMLArticles) {
    articleHTML.style.display = 'none'; // none is hidding the article
  }
  // show only the "best seller article" -> <article class="best">
  // This article got the class from the cloning loop : clone.classList.add('best');
  const bestCSSClassArticles = document.querySelectorAll('article.best');
  for (const articleHTML of bestCSSClassArticles) {
    articleHTML.style.display = 'block'; // block is showing the article (Opposite of "hidden")
  }
});
