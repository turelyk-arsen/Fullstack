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



