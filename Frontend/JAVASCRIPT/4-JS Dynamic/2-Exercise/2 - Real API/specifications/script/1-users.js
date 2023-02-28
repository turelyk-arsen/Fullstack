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

  for (const user of usersArray) {
    
    const mockOption = document.querySelector("option");
    const clonedOption = mockOption.cloneNode(true);
    document.querySelector("select").append(clonedOption);

    clonedOption.innerText = user.name;
    clonedOption.value = user.id;
  }
}
