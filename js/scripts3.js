function numberRange(input) {
  var inputRange = [];
  // var one = "Beep!";
  // var two = "Boop!";
  // var three = "I'm sorry, Dave. I'm afraid I can't do that."
  for (var i=0; i <= input; i++) {
    // alert("this is working");
    var inputString = input.toString();
    // alert("userNumber");
    if (inputString !=0 && i % 3 === 0) {
        inputRange.push("yo");
       } else if (inputString === 2) {
         inputRange.push("Boop!");
       } else if (inputString === 1) {
        inputRange.push("Beep!");
       } else {
         (inputString === 0)
         inputRange.push(inputString);
       }
    } 
    return inputRange
  }
numberRange(2);