$("#button").on("click", function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (response) {
      console.log(response);

      const picture = response.results[0].picture.large;

      const email = response.results[0].email;

      const nameTitle = response.results[0].name.title;
      const nameFirst = response.results[0].name.first;
      const nameLast = response.results[0].name.last;

      $("#img").attr("src", picture);
      $("#name").html(
        "<h2>" + nameTitle + " " + nameFirst + " " + nameLast + "</h2>"
      );
      $("#email").html("<p>" + email + "</p>");

      const gender = response.results[0].gender;
      if (gender == "male") {
        $("#img").addClass("male");
        $("#img").removeClass("female");
        $('div').css('background-color', '#4a7dd44a');
        $("button").addClass("maleButton");
        $("button").removeClass("femaleButton");
      } else {
        $("#img").addClass("female");
        $("#img").removeClass("male");
        $('div').css('background-color', '#d44a984a');
        $("button").addClass("femaleButton");
        $("button").removeClass("maleButton");
      }
    },
  });
});

$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (response) {
    console.log(response);

    const picture = response.results[0].picture.large;

    const email = response.results[0].email;

    const nameTitle = response.results[0].name.title;
    const nameFirst = response.results[0].name.first;
    const nameLast = response.results[0].name.last;

    $("#img").attr("src", picture);
    $("#name").append(nameTitle + " " + nameFirst + " " + nameLast);
    $("#email").append(email);

    const gender = response.results[0].gender;
    if (gender == "male") {
      $("#img").addClass("male");
      $("button").addClass("maleButton");
      $('div').css('background-color', '#4a7dd44a');
    } else {
      $("#img").addClass("female");
      $("button").addClass("femaleButton");
      $('div').css('background-color', '#d44a984a');

    }
  },
});
