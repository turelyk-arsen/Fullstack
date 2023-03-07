$("form").on("submit", function (event) {
  event.preventDefault();

  const textMassage = $("#comment").val();
  const validTextMassage = textMassage.length > 4;
  if (!validTextMassage) {
    $("#error").html("<p>Your message must be bigger!!!</p>");
  } else {
    $("#error").html("<p></p>");

    $("#coms").append(
      '<li> <img src="images/User.png" alt=""><p>' + textMassage + "</p></li>"
    );
  }

});
