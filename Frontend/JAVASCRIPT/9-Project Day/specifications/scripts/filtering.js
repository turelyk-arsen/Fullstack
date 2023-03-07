$("button#best").on("click", function (event) {
  $(".false").hide();
  $('#newcard .false').hide();

});

$("button#all").on("click", function (event) {
  $(".false").show();
  $('#newcard').hide();
  $("#cards").show();
  
});

// add NAME button 
const newArray = photosArray.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});


$("button#name").on("click", function () {
  nameNew()
  $("#cards").hide();
});

function nameNew() {
  const newCard = $("#cards article").eq(0);
  for (const photoData of newArray) {
    const cloneCard1 = newCard.clone();
    $("#newcard").append(cloneCard1);

    // add from array
    cloneCard1.find("img").attr("src", photoData.imgUrl);
    cloneCard1.find("h3").text(photoData.name);
    cloneCard1.find("h4").text(photoData.price);

    if (photoData.bestSeller) {
      cloneCard1.addClass("true");
    } else {
      cloneCard1.addClass("false");
      $(".false .seller").hide();
    }
  }
}


// const newArrayNumber = photosArray.sort(function (a, b) {
//     if (a.price < b.price) {
//       return -1;
//     }
//     if (a.price > b.price) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log(newArrayNumber);

// const newArrayNumber = photosArray;
// for (let i = 0; i < photosArray.length; i++) {
//     let a = photosArray[i].price;
//     let aAA =a.slice(1);
//     newArrayNumber[i].price = aAA
// }
//   const newArrayNumberSort = newArrayNumber.sort((a, b) => a.price - b.price);
//   console.log(newArrayNumberSort);


// $("button#price").on("click", function () {
//   $("#cards").hide();
//   $("#newcard").hide();
//   $("#newcardNum").show(nameNewNum());
// });

// function nameNewNum() {
//   const newCard = $("#cards article").eq(0);
//   for (const photoData of newArrayNumberSort) {
//     const cloneCard12 = newCard.clone();
//     $("#newcardNum").append(cloneCard12);

//     // add from array
//     cloneCard12.find("img").attr("src", photoData.imgUrl);
//     cloneCard12.find("h3").text(photoData.name);
//     cloneCard12.find("h4").text('$' + photoData.price);

//     if (photoData.bestSeller) {
//       cloneCard12.addClass("true");
//     } else {
//       cloneCard12.addClass("false");
//       $(".false .seller").hide();
//     }
//   }
// }


