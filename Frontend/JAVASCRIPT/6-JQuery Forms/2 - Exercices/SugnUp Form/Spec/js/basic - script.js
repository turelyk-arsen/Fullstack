// Apply a show/hide to #pswd_info on focus/blur on #pswd

// on every key pressed "keyup"
// Gathering : checked the password value : $("#pswd").val()
// at least one number "123".match(/\d/) => true
// at least one letter .match(/[A-z]/)
// length >= 8

// if you want to talk RegEx
// Go join your people there : https://stackoverflow.com/questions/18057962/regex-pattern-including-all-special-characters/18058074

$("#pswd").on("focus", function () {
  $("#pswd_info").show(1000);
});

$("#pswd").on("blur", function () {
  $("#pswd_info").hide(1000);
});

$("#pswd").on("keyup", function (event) {
  event.preventDefault();

  const pwdValue = $("#pswd").val();
  const numberValid = pwdValue.match(/\d/); //REGEX regulaf expression
  if (numberValid) {
    $("#number").addClass("valid");
  } else {
    $("#number").removeClass("valid");
  }

  // at least one Capital letter .match(/[A-Z]/)
  const capitalValid = pwdValue.match(/[A-Z]/);
  if (capitalValid) {
    $("#capital").addClass("valid");
  } else {
    $("#capital").removeClass("valid");
  }

  // at least one letter .match(/[A-z]/)
  const letterValid = pwdValue.match(/[A-z]/);
  if (letterValid) {
    $("#letter").addClass("valid");
  } else {
    $("#letter").removeClass("valid");
  }

  // length >= 8
  const lengthPass = pwdValue.length >= 8;
  if (lengthPass) {
    $("#length").addClass("valid");
  } else {
    $("#length").removeClass("valid");
  }
  // const lengthPass = pass.length >= 8;
  // const checkLengh = lengthPass ? "green" : "red";
  // $("#length").css({
  //   color: checkLengh,
  // });
});

// On submit, Check that the password and passwordConfirm matches
// Inputs : pwd, pwdconfirm
// Logic
// All cases to check
// check for matching of confirmation

$("form#signUp").on("submit", function (event) {
  event.preventDefault();
  const pass = $("#pswd").val();
  const passConfirm = $("#pswdConfirm").val();

  const capitalValid = pass.match(/[A-Z]/);
  const letterValid = pass.match(/[A-z]/);
  const digitValid = pass.match(/\d/);
  const lengthValid = pass.length >= 8;

  const matchingPWD = pass === passConfirm;
  const allIsGood = capitalValid && letterValid && digitValid && lengthValid && matchingPWD;

  if (allIsGood) {
    $(this).html('<h2> You are registered correctly </h2>');
  } else {
    alert ('What is wrong with you');
  }
  // const passValid = pass === passConfirm;
  // const result = passValid ? "green" : "red";
  // $("#pswdConfirm").css({
  //   borderColor: result, 
  // });


});
