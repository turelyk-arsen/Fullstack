/* This function is called at the launch of the page
  and will receive an array of users */
// function createUsers(usersArray) {
//   console.log(usersArray);
/* 1 - Creating the users select <option> dynamically */
/* Loop over the array of user to
    duplicate <option> of the <select>
    and add this "new cloned option" to the select */
/* and the innerText to the 'name' of the user */
/* change the value to the 'id' of the user */
// }

function createUsers(usersArray) {
  console.log(usersArray);
  }


const template = document.querySelector("usersSelect");

  for (const data of usersArray) {
    const clone = template.cloneNode(true);
    document.querySelector("option").append(clone);

    // clone.querySelector("h2").innerText = data.title;
    // clone.querySelector("p").innerText = data.content;
    // // change the css class of the article
    // clone.classList.add(data.category);
  }