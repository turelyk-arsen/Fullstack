//1 - when the page is loaded , make the preloader disappears

// 2 - When the user submit his Form, you need to do some verifications
// You will use #helpForm to warn the user
// Trigger
$("form").on("submit", function (event) {
  event.preventDefault();
  let errors = [];
  // inputs
  const nameValue = $("#name").val();
  const subjectValue = $("#subject").val();
  const messageValue = $("#message").val();
  const emailValue = $("#email").val();

  // logic
  const nameValid = nameValue.length > 0;
  if (!nameValid) {
    errors.push("Name is required");
  }

  const subjectValid = subjectValue.length > 0;
  if (!subjectValid) {
    errors.push("Subject is required");
  }

  const messageValid = messageValue.length > 40;
  if (!messageValid) {
    errors.push("Message should be at least 40");
  }

  const emailValid = emailValue.includes("@") && emailValue.includes(".");
  if (!emailValid) {
    errors.push("That is not a valid email");
  }
  $("#helpForm").html(errors.join("<br>"));

  if (errors.length == 0) {
    const success =
      nameValue +
      ", your message" +
      messageValue +
      " has been sent. You will be contact soon on the mail address " +
      emailValue +
      " about" +
      subjectValue;
    $("form").text(success);
  }
});
// Output
//errors
// .join('<br>') will make a string from my array
// So that ['error1','error2'] => 'error1<br>error2'
// IF ALL IS VALID REPLACE THE FORM WITH
/*
    const success = `${nameValue}, your message ${messageValue} has been sent. 
    You will be contact soon on the mail address ${emailValue} 
    about ${subjectValue}`;
    */

$("#preloader").fadeOut(1000);

// $("form").on("submit", function (event) {
//   event.preventDefault();

//   const message = $("#message").val();
//   const messageValid = message.length > 4;

//   const email = $("#email").val();
//   const emailatSign = email.match(/@/);
//   const emailDot = email.match(/./);
//   const emailValid = emailDot && emailatSign;

//   if (messageValid && emailValid) {
//     $("form").html("<h2> You will be contact soon on the mail address </h2>");
//   } else {
//     $('textarea').text("The message must be more than 40 characters:");
//     // $("textarea").attr("placeholder", "The message must be more than 40 characters:");
// }
// });
