// console.log(123) to check your links
const APIUrl = "https://chat-api-course.onrender.com/rooms";
// [GET] / rooms
fetch(APIUrl)
  .then((response) => response.json()) // alternative writing
  .then(function (resJson) {
    console.log(resJson);
    const roomsArray = resJson.data;

    for (const room of roomsArray) {
      const newLi = document.createElement("li");
      newLi.textContent = room.roomName;
      document.querySelector("#roomsList").append(newLi);

      //   const clone = document.querySelector("li").cloneNode(true);
      //   document.querySelector("ul").append(clone);
      //   clone.innerText = rooms.roomName;
    }
    // document.querySelector("li").remove();
  });
// [POST] / rooms
document.querySelector("#addRoom").addEventListener("submit", function (e) {
  e.preventDefault();
  //gather
  const roomValue = document.querySelector("#roomInput").value;
  //handle POST
  const requestSettings = {
    method: "POST",
    body: {
      roomName: "elits"
    }
  };
  
  fetch(APIUrl, requestSettings)
    .then((res) => res.json())
    .then(function (resJson) {
      console.log(resJson);
    });
  //feedback
});
