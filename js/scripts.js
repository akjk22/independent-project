//Business Logic
function numberRange(index) {
  var inputResult = [];
  var one = "Beep!";
  var two = "Boop!";
  var three = "I'm sorry, Dave. I'm afraid I can't do that."
    for (var i=0; i <= inputResult; index++) {
      // alert("this is working");
      userNumber = inputResult.toString();
      console.log(userNumber);
      if (userNumber.includes("1")) {
        inputResult.push("Beep!");
      } else if (inputResult.includes("2")) {
        inputResult.push("Boop!");
      } else if (userString.includes("3")) {
        inputResult.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else {
        outputArray.push(i.toString());
      }
      return inputResult;
    } 
}
   

//start user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    // alert("this is working!")
// var input1 = parseInt($("#num1").val());

  });
});