// check color button

$("form").on("keyup", function (event) {
  event.preventDefault();

  const victim = $("#victim").val();
  const victimValid = victim.length > 4 && victim.includes(" ");
  const carry = $("#carry").val();
  const carryValid = carry.length > 4;

  if (victimValid && carryValid) {
    $("#button").removeAttr("disabled");
  } else {
    $("#button").attr("disabled", "true");
  }
});
