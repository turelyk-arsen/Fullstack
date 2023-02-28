/*
News website
You are now in charge of the coding of a news related website.
The data are provided by google news service
and will be avaible in your code thanks to the file data.js

You are required today to add each article to a section
that will be filtered by category.
*/

/*
Hint :
1 - Use the cloning method to generate the cloned <article>s
*/

const template = document.querySelector('#trending article');
for (const data of articlesArray) {
    const clone = template.cloneNode(true);
    document.querySelector('section').append(clone);

    clone.querySelector('h2').innerText = data.title;
    clone.querySelector('p').innerText = data.content;
    clone.querySelector('a').href = data.url;

    clone.classList.add(data.category);
}

template.remove();
