// FORM
$("form").on("submit", function (event) {
  event.preventDefault();

  let errors = [];
  
//   input 
  const name = $("#username").val();
  const email = $("#userEmail").val();
  const nameValid = name.length > 6;

//   logic 
if (!nameValid) {
    errors.push('MESAGGE');
}
const emailValid = email.includes('@') && email.includes('.');
if (!emailValid) {
    errors.push("error!!!");
}

if (errors.length == 0) {
    const success = name + 'text' + email + 'text';
    $('form').text(success);
}

  if (nameValid) {
    $("#username").css({ borderColor: "green" });
  } else {
    $("#username").css({ borderColor: "red" });
  }

  $(this).html(name + "messages!!!");

});

// PASSWORD
$('#pswd').on('keyup', function (event) {
    event.preventDefault();

    const password = $('#pswd').val();
    const confirmPassword = $('#pswd2').val();
    const matchingPWD = password === confirmPassword;


    const numberValid = password.match(/\d/);
    const capitalValid = password.match(/[A-Z]/);
    const letterValid =password.match(/[A-z]/);

    if (numberValid) {
        $('#number').addClass('valid');
    } else {
        $('#number').removeClass('valid');
    }
})


// CLONE 
const model = $('div').eq(0);

for (const name of nameArray) {
    const clone = model.clone();
    $('article').append(clone);

    clone.find('p').text(name.name);
    clone.css({'background-image': 'url(' + name.img + ')',});
    clone.find('.card-img-top').attr('src', actor.picture);
    clone.addClass(name.category);

    if (name.class) {
        clone.addClass('reached');
    } else {
        clone.addClass('new');
    }

    // PROGRESS 
    clone.find('progress').attr('value', name.current);

    // OPTION 
   cloneOption.text(actor.name);
   cloneOption.val(actor.name);
}
model.remove();

// FILTERING 
$('#all').on('click', function () {
    // CSS 
    $('button').removeClass('selected');
    $(this).addClass('selected');

    // ACTION 
    $('article.new').slideDown(500);
    $('article.reached').slideUp(500);
})

$('#category .btn').on('click', function () {
    
    const selectedCategory = $(this).find('input').val();
    // take input VALUE and select the same value in option with VAL() 
    $('.' + selectedCategory).slideDown();
    $('#inputCategory').val(selectedCategory);
})

$('.card').on('click', function () {
    $('.card').removeClass('bg-primary');
    $(this).addClass('bg-primary');

    const selectedActor = $(this).find('h5').text();
    $('#inputActors').val(selectedActor);
})