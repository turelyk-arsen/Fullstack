// CLONE
const model = $("#cards article").eq(0);

for (const name of victimsArray) {
  const clone = model.clone();
  $("#cards").append(clone);

  // add picture
  clone.css({ "background-image": "url(" + name.pictureUrl + ")" });

  // add class of button
  if (name.quantity > 0) {
    clone.find("div").addClass("inStock");
    clone.find("div").text("IN STOCK");
    clone.addClass("inStockForFilter");
  } else {
    clone.find("div").addClass("soon");
    clone.find("div").text("SOON");
    clone.addClass("soonForFilter");
  }
}
model.remove();

// overlay effect 
function displayOverlay(text) {
  $("<table id='overlay'><tbody><tr><td>" + text + "</td></tr></tbody></table>").css({
      "position": "fixed",
      "top": "0px",
      "left": "0px",
      "width": "100%",
      "height": "100%",
      "background-color": "rgba(0,0,0,.5)",
      "z-index": "10000",
      "vertical-align": "middle",
      "text-align": "center",
      "color": "#fff",
      "font-size": "40px",
      "font-weight": "bold",
      "cursor": "wait"
  }).appendTo("body");
}

function removeOverlay() {
  $("#overlay").remove();
}

$(function () {
  $("body").click(function () {
      if ($("#overlay").length > 0) {
          removeOverlay();
      } 
  });
  displayOverlay("Loading... <br><br><br> click anywhere to turn off overlay effect ");
});
