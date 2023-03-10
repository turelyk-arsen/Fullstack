// console.log(123) to check your links

const APIUrl = "https://chat-api-course.onrender.com/rooms";
// [GET] / rooms
//definition function === API data --> HTML
function refreshRoomsList() {
  fetch(APIUrl)
    .then((response) => response.json()) // alternative writing
    .then(function (resJson) {
      console.log(resJson);
      const roomsArray = resJson.data;
      // clean the <ul>
      document.querySelector("#roomsList").innerHTML = "";
      // append in the <ul>
      for (const room of roomsArray) {
        const newLi = document.createElement("li");
        newLi.textContent = room.roomName;
        document.querySelector("#roomsList").append(newLi);
      }
    });
}
refreshRoomsList(); // call function

// [POST] / rooms
document.querySelector("#addRoom").addEventListener("submit", function (e) {
  e.preventDefault();
  //gather
  const roomValue = document.querySelector("#roomInput").value;
  //handle POST
  const requestSettings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomName: roomValue,
    }),
  };

  fetch(APIUrl, requestSettings)
    .then((res) => res.json())
    .then(function (resJson) {
      console.log(resJson);
      //feedback
      // call the function that refresh the HTML
      refreshRoomsList();
    });
});
