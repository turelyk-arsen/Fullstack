// Jquery is loaded

jQuery(document).ready(function () {});
$(document).ready(function () {});

$(function () {
  // alert('JQuery is loaded');
});

// You don't need that if you respect the position of the script
// in the index.html (and if there is no mispell, upper case or
// lowercase where is shouldn't apparently)

$("h1").text("A new Heading");
$("h1").html("A <em>new</em> Heading");
// don't mix selecting with jQuery and Vanilla JS properties
// $('h1').innerText = 'Does not work!!!';
// document.querySelector('h1').text('Does not work!!!');

// CSS
$("h1").css({
  color: "red",
  textAlign: "center",
  "background-color": "lightblue",
});

// ONE Element
$("h1").on("click", function () {
  $(this).toggleClass("important");
});

// Many elements
$("h2").on("click", function () {
  $(this).toggleClass("important");
});

// select a specific element
$("h2").eq(0).text("I am the first h2");
$("h2").eq(2).text("I am the 3 h2");

// form  with ?????????????????????????????
// $("form").on("submit", function (event) {
//   event.preventDefault();
//   const name = $("#username").val();
//   const nameValid = name.length > 6;
//   const color = nameValid ? "green" : "red"; // true : false
//   $("#username").css({
//     borderColor: color,
//   });
// });

$("form").on("submit", function (event) {

  const name = $("#username").val();
  const nameValid = name.length > 6;
  if (nameValid) {
    $("#username").css({ borderColor: "green", });
  } else {
    $("#username").css({ borderColor: "red", });
  }
});

//DUPLICATION // CLONE
// model / template
const userArray = [
    {name: 'Timmy'},
    {name: 'Tiago'},
    {name: 'Angelina'},
    {name: 'Mr Theo'},
    {name: 'Arsen'},
    {name: 'Rick'},
    {name: 'Morty'},
];

const model = $('ul li').eq(0);
for (const userData of userArray) {
    // 1 - create / clone
    const clone = model.clone();
    // 2 - append
    $('ul').append(clone);
    // 3 - customize
    clone.find('span').text(userData.name);
    // optional add on event to a clone
    clone.on('click', function () {
        // light animation
        $(this).hide(1000);
    });
}
// kill the model
model.remove();