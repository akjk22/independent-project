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
       } else if (inputString.includes(2)) {
       // console.log("yes");
         inputRange.push("Boop!");
       } else (inputString.includes(3)) 
         inputRange.push("yo");
       }
       return input;
    } 
    

   
