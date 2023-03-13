const APIUrl = "https://chat-api-course.onrender.com/users";

// function checkUsersList() {
//   fetch(APIUrl)
//     .then((response) => response.json())
//     .then(function (resJson) {
//       console.log(resJson);
//       const usersArray = resJson.data;
// document.querySelector("#usersList").innerHTML = "";

//       for (const user of usersArray) {
//         // const newLi = document.createElement("li");
//         // newLi.textContent = user.username;
//         // document.querySelector("#usersList").append(newLi);

//         // const newImg = document.createElement("img");
//         // newImg.src = user.image;
//         // document.querySelector("#usersList").append(newImg);

//       }
//     });
// }
// refreshUsersList(); // call function

// [POST] / rooms
document.querySelector("#checkUser").addEventListener("submit", function (e) {
  e.preventDefault();

  const userValue = document.querySelector("#userInput").value;
  const userPassword = document.querySelector("#userPassword").value;

  // const requestSettings = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //       username: userValue,
  //       password: userPassword,
  //       image: 'https://picsum.photos/200'
  //   }),
  // };

  fetch(APIUrl)
    .then((res) => res.json())
    .then(function (resJson) {
      console.log(resJson);
      const usersArray = resJson.data;

      for (const user of usersArray) {
        const name = user.username == userValue;
        const password = user.password == userPassword;
        console.log(password)
        if (name) {
          const newText = document.createElement("p");
          newText.innerText = "You are log in!!!!!";
          document.querySelector("#usersList").append(newText);
        }
      }
    });
});
