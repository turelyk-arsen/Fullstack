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
