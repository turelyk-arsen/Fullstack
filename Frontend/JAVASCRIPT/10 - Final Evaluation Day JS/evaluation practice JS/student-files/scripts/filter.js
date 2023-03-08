// FILTERING

// button all
$("#all").on("click", function () {
  // CSS
  $("button").removeClass("myActive");
  $(this).addClass("myActive");

  // ACTION
  $("#cards article.inStockForFilter").show();
  $("#cards article.soonForFilter").show();
});

// button in stock
$("#inStock").on("click", function () {
  // CSS
  $("button").removeClass("myActive");
  $(this).addClass("myActive");

  // ACTION
  $("#cards article.inStockForFilter").show();
  $("#cards article.soonForFilter").hide();
});

// button soon
$("#soon").on("click", function () {
  // CSS
  $("button").removeClass("myActive");
  $(this).addClass("myActive");

  // ACTION
  $("#cards article.inStockForFilter").hide();
  $("#cards article.soonForFilter").show();
});
