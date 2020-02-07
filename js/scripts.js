//Business Logic
function numberRange(input) {
  var inputRange = [];
  // var one = "Beep!";
  // var two = "Boop!";
  // var three = "I'm sorry, Dave. I'm afraid I can't do that."
    for (var i=0; i <= input; i++) {
      // alert("this is working");
      var inputString = input.toString();
      // alert("userNumber");
      if (inputString.includes(1)) {
        // console.log("yes");
        inputRange.push("Beep!");
        console.log(inputRange);
         } else if (inputString.includes(2)) {
         // console.log("yes");
           inputRange.push("Boop!");
         } else if (inputString.includes(3)) {
           // console.log("yes");
           inputRange.push("I'm sorry, Dave. I'm afraid I can't do that.");
         } else {
           // console.log("yes");
          inputRange.push(input.toString());
          return input
          }
      // console.log(input);
      numberRange(3);
    } 
   
}
   

//start user interface logic
// $(document).ready(function(){
//   $("form").submit(function(event){
//     event.preventDefault();

//     var inputResult = $("#numOne").val();
//     // alert(inputResult);
//     $('body').append(`<div class="outputMargin"><p>${inputResult}</p></div>`);
//   });
// });