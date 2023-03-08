// FORM validation
$("#victim").on("keyup", function () {
  //   input
  const victim = $("#victim").val();
  // check value
  const victimValid = victim.includes(" ");
  //   logic
  if (victimValid) {
    $("#victim").css({ borderColor: "green" });
  } else {
    $("#victim").css({ borderColor: "red" });
  }
});

$("#carry").on("keyup", function () {
  //   input
  const carry = $("#carry").val();
  // check value
  const carryValid = carry.length > 4;
  //   logic
  if (carryValid) {
    $("#carry").css({ borderColor: "green" });
  } else {
    $("#carry").css({ borderColor: "red" });
  }
});
