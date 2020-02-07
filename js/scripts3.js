function numberRange(input) {
  var inputRange = [];

  for (var i=0; i <= input; i++) {
    if (i.toString().includes("3")) {
        inputRange.push(" I'm sorry, Dave. I'm afraid I can't do that.");
       } else if (i.toString().includes("2")) {
         inputRange.push(" Boop!");
       } else if (i.toString().includes("1")) {
        inputRange.push(" Beep!");
       } else {
         inputRange.push(i);
       }
    } 
    return inputRange
  }


// start user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numOne").val());
    $('body').append(`<div class="outputMargin"><p>${numberRange(input)}</p></div>`);
  });
});