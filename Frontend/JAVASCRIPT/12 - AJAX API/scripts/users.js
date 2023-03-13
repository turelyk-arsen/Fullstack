// GET
const baseUrl = "https://chat-api-course.onrender.com";
let usersArray;

$.ajax({
  method: "GET",
  url: baseUrl + "/users",
}).done(getUsers);
function getUsers(response) {
  usersArray = response.data;
  const model = $("#userList li");
  for (const userData of usersArray) {
    const clone = model.clone();
    $("#userList").append(clone);
    clone.text(userData.username);
  }
  model.remove();
}
// local storage is use to transmit data from the signup/login
// page in index.html
if (localStorage.getItem("hash")) {
  // I'm connected
  alert('i"m connected');
}
// disconect
$("#disconect").on("click", function () {
  localStorage.removeItem("disconect");
});

// message [POST]
// [GET] message /1
$("#message-form").on("click", function (e) {
  e.preventDefault();
  const userMessageValue = $("#messageInput").val();

  $.ajax({
    method: "POST",
    url: baseUrl + "/messages/1",
    data: {
      hash: localStorage.getItem("hash"),
      message: userMessageValue,
    },
  });
});

// const APIUrl = "https://chat-api-course.onrender.com/users";

// function refreshUsersList() {
//   fetch(APIUrl)
//     .then((response) => response.json())
//     .then(function (resJson) {
//       console.log(resJson);
//       const usersArray = resJson.data;
//       // clean the <ul>
//       document.querySelector("#usersList").innerHTML = "";
//       // append in the <ul>
//       for (const user of usersArray) {
//         const newLi = document.createElement("li");
//         newLi.textContent = user.username;
//         document.querySelector("#usersList").append(newLi);

//         const newImg = document.createElement("img");
//         newImg.src = user.image;
//         document.querySelector("#usersList").append(newImg);
//       }
//     });
// }
// refreshUsersList(); // call function

// // [POST] / rooms
// document.querySelector("#addUser").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const userValue = document.querySelector("#userInput").value;
//   const userPassword = document.querySelector("#userPassword").value;
//   const requestSettings = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         username: userValue,
//         password: userPassword,
//         image: 'https://picsum.photos/200'
//     }),
//   };

//   fetch(APIUrl, requestSettings)
//     .then((res) => res.json())
//     .then(function (resJson) {
//       console.log(resJson);
//       refreshUsersList();
//     });
// });
