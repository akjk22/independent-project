//Business Logic
function numberRange(inputResult) {
  var inputRange = [];
  var one = "Beep!";
  var two = "Boop!";
  var three = "I'm sorry, Dave. I'm afraid I can't do that."
    for (var i=0; i <= inputResult; i++) {
      // alert("this is working");
      userNumber = inputResult.toString();
      // console.log(userNumber);
      if (userNumber.includes("1")) {
        // console.log("yes");
        inputRange.push("Beep!");
      } else if (userNumber.includes("2")) {
        // console.log("yes");
        inputRange.push("Boop!");
      } else if (userNumber.includes("3")) {
        // console.log("yes");
        inputRange.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else {
        // console.log("yes");
        inputRange.push(i.toString());
      }
      return inputRange;
    } 
   
}
   

//start user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputResult = $("#numOne").val();
    // alert(inputResult);
    $('body').append(`<div><p>${inputResult}</p></div>`);
  });
});