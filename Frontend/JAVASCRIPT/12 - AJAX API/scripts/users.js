
const APIUrl = "https://chat-api-course.onrender.com/users";

function refreshUsersList() {
  fetch(APIUrl)
    .then((response) => response.json()) 
    .then(function (resJson) {
      console.log(resJson);
      const usersArray = resJson.data;
      // clean the <ul>
      document.querySelector("#usersList").innerHTML = "";
      // append in the <ul>
      for (const user of usersArray) {
        const newLi = document.createElement("li");
        newLi.textContent = user.username;
        document.querySelector("#usersList").append(newLi);

        const newImg = document.createElement("img");
        newImg.src = user.image;
        document.querySelector("#usersList").append(newImg);
      }
    });
}
refreshUsersList(); // call function

// [POST] / rooms
document.querySelector("#addUser").addEventListener("submit", function (e) {
  e.preventDefault();

  const userValue = document.querySelector("#userInput").value;
  const userPassword = document.querySelector("#userPassword").value;
  const requestSettings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: userValue,
        password: userPassword,
        image: 'https://picsum.photos/200'
    }),
  };

  fetch(APIUrl, requestSettings)
    .then((res) => res.json())
    .then(function (resJson) {
      console.log(resJson);
      refreshUsersList();
    });
});
