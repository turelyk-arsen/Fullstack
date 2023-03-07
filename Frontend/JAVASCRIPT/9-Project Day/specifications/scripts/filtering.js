$("button#best").on("click", function (event) {
  $(".false").hide();
});

$("button#all").on("click", function (event) {
  $(".false").show();
});


// $("#name").on('click', function (event) {
//     var mylist = $('#card');

//     console.log(mylist);
//     var listitems = mylist.find('#card h3');
//     console.log(listitems);

//     listitems.sort(function(a, b) {
//        var compA = $(a).text().toUpperCase();
//        var compB = $(b).text().toUpperCase();
//        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
//     })

//     $.each(listitems, function(idx, itm) { mylist.append(itm); });
//     });

function sort(selector) {
    $(selector).children("#cards h3").sort(function(a, b) {
        var A = $(a).text().toUpperCase();
        var B = $(b).text().toUpperCase();
        return (A < B) ? -1 : (A > B) ? 1 : 0;
    }).appendTo(selector);
}
  
$('button').on('click', function() {
    sort("#cards");
    $("#newcard").text("sorted");
});