//1 - when the page is loaded , make the preloader disappears

// 2 - When the user submit his Form, you need to do some verifications
// You will use #helpForm to warn the user
// Trigger
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

$("form").on("submit", function (event) {
  event.preventDefault();

  const message = $("#message").val();
  const messageValid = message.length > 4;

//   const email = $("#email").val();
//   const emailValid = email.match;

  if (messageValid) {
    $("form").html("<h2> You will be contact soon on the mail address </h2>");
  } else {
    $('#mymes').text("The message must be more than 40 characters:");
  }
});
