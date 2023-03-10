// FORM submission
$("form").on("submit", function (event) {
  event.preventDefault();

  const victim = $("#victim").val();
  const victimValid = victim.length > 4 && victim.includes(" ");
  const carry = $("#carry").val();
  const carryValid = carry.length > 4;

  if (victimValid && carryValid) {
    $("form").text(
      "Thanks for the trust your puting in us. We'll carry Ned Flanders, ASAP"
    );
  } else {
    alert("An error occured, we can't carry your victim.");
  }
});
