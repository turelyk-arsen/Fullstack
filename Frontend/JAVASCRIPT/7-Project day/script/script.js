
const goalsArray  = [
    {
        name : "Maserati Guibli",
        picture : "images/goals/maserati.png",
        goal : 85000,
        current : 68000,
        riched : false,
    },
    {
        name : "Playstation 4",
        picture : "images/goals/ps4.png",
        goal : 800,
        current : 150,
        riched : false,
    },
    {
        name : "Samsung Galaxy S10e",
        picture : "",
        goal : 1000,
        current : 300,
        riched : false,
    },
    {
        name : "Boat",
        picture : "",
        goal : 10000,
        current : 10000,
        riched : true,
    },
    {
        name : "Rolex",
        picture : "",
        goal : 5000,
        current : 5000,
        riched : true,
    },
];

const model = $('article');
for (const userData of goalsArray) {
    // 1 - create / clone
    const clone = model.clone();
    // 2 - append
    $('section').append(clone);
    // 3 - customize
    clone.find('h2').text(userData.name);
    clone.find('h3').text(userData.goal);
    clone.find('h4').text(userData.current);
    clone.css('background-image', 'url('+userData.picture+')');

    // optional add on event to a clone
    // clone.on('click', function () {
    //     // light animation
    //     $(this).hide(1000);
    // });
//     $('body').css('background-image',
//  'url("https://www.w3resource.com/includes/jquery-images/jquery.gif")');
}
// kill the model
model.remove();