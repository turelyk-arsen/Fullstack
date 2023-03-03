const goalsArray = [
  {
    name: "Maserati Guibli",
    picture: "images/goals/maserati.png",
    goal: 85000,
    current: 68000,
    riched: "false",
  },
  {
    name: "Playstation 4",
    picture: "images/goals/ps4.png",
    goal: 800,
    current: 150,
    riched: false,
  },
  {
    name: "Samsung Galaxy S10e",
    picture: "",
    goal: 1000,
    current: 300,
    riched: false,
  },
  {
    name: "Boat",
    picture: "",
    goal: 10000,
    current: 10000,
    riched: true,
  },
  {
    name: "Rolex",
    picture: "",
    goal: 5000,
    current: 5000,
    riched: true,
  },
];

const model = $("article");
for (const userData of goalsArray) {
  // 1 - create / clone
  const clone = model.clone();
  // 2 - append
  $("section").append(clone);
  // 3 - customize
  clone.find("h2").text(userData.name);
  clone.find("h3").text("$" + userData.goal);
  clone.find("h4").text("$" + userData.current);

  clone.css("background-image", "url(" + userData.picture + ")");

  let length = (userData.current / userData.goal) * 100;
  clone.find("#myBar").width(length + "%");

//   const section = $("section");
//   section.find("article").addClass([userData.riched]);

// clone.find("article").addClass([userData.riched]);
// $("article").addClass([userData.riched]);

  // optional add on event to a clone
  clone.on("click", function () {
    // light animation
    $(this).hide(1000);
  });
}
// kill the model
model.remove();
let numTrue = 0;
let numFalse = 0;

for (let i = 0; i < goalsArray.length; i++) {
  if (goalsArray[i].riched == false) {
    numFalse++;
    numTrue = goalsArray.length - numFalse;
    $("article").eq(i).addClass([goalsArray[i].riched]);
  } else {
    $("article").eq(i).addClass([goalsArray[i].riched]);
  }
}

$("#add").text("ADD " + goalsArray.length);
$("#new").text("NEW " + numFalse);
$("#reached").text("REACHED " + numTrue);

$("#add").on("click", function () {
  $("article").fadeIn("2000");
});

$("#new").on("click", function () {
  $(".true").fadeOut("2000");
});

$("#reached").on("click", function () {
  $(".false").fadeOut("2000");
});
