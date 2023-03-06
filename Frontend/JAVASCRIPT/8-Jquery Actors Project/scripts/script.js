const newCard = $("section div.card").eq(0);
for (const actorData of actorsArray) {
  const cloneCard = newCard.clone();
  $("section div.row").append(cloneCard);

  // add from array
  cloneCard.find("h5.card-title").text(actorData.name);
  cloneCard.find("img").attr("src", actorData.picture);
  cloneCard.addClass(actorData.category);
  cloneCard.removeClass("d-none");

  // hide all exept male
  $(".female").hide();
  $(".baby").hide();
}
newCard.remove();

// add event on button
$(".mybutton .btn").on("click", function (event) {
  const selectCat = $(this).val();
  //   const selectOption = $("option").val();
  console.log(selectCat);
  // console.log(selectOption);

  $(".card").hide();
  $("." + selectCat).slideDown(1000);
  $("#inputState").val(selectCat);

  //   $("option:selected").removeAttr("selected");
  //   // $(this).attr('selected','selected');
  //   // $(this).attr('selected');
  //   if (selectCat == selectOption) $(selectOption).attr("selected", "selected");
});

//   add name actors
const newActor = $(".addActor option");
for (const actorName of actorsArray) {
  const cloneActor = newActor.clone();
  $(".addActor select").append(cloneActor);
  cloneActor.text(actorName.name);
  cloneActor.val(actorName.name);
}
// newActor.remove();

$(".card").on("click", function (event) {
  $(".card").removeClass("bg-primary text-white");
  $(this).addClass("bg-primary text-white");

  const selectedActor = $(this).find("h5").text();
  $("#inputActors").val(selectedActor);
});

$("#submit").on("click", function (event) {
  event.preventDefault();
  const actorName = $("#inputActors").val();

  $(".form").html(
    "<article class='display-6'> Sorry, " +
      actorName +
      " is not currently available. You will be contacted as soon as possible.</article>"
  );
});

$("#inputState").on("click", function () {
  const optionIs = $(this).val();
  $(".btn").val(optionIs);
  $(".card").hide();
  $("." + optionIs).show();
});

$("#inputActors").on("click", function () {
  let actorChoose = $("#inputActors").val();

  if (
    actorChoose == ("magnus jensen") ||
    actorChoose == ("richard bradley") ||
    actorChoose == ("eduardo martin")
  ) {
    $(".card").hide();
    $(".male").show();
    $("#inputState").val("male");
  } else if (
    actorChoose === "norah faure" ||
    actorChoose === "rose clarke" ||
    actorChoose === "adeline mathieu"
  ) {
    $(".card").hide();
    $(".female").show();
    $("#inputState").val("female");
  } else {
    $(".card").hide();
    $(".baby").show();
    $("#inputState").val("baby");
  }
});
