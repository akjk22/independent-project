function numberRange(input) {
  var inputRange = [];
  // var one = "Beep!";
  // var two = "Boop!";
  // var three = "I'm sorry, Dave. I'm afraid I can't do that."
  for (var i=0; i <= input; i++) {
    // alert("this is working");
    var inputString = input.toString();

    // alert("userNumber");
    if (i % 3 === 0 && i !== 0) {
        inputRange.push("yo");
       } else if (inputString.includes("1")) {
         inputRange.push("Boop!");
       } else if (inputString.includes("2")) {
        inputRange.push("Beep!");
       } else {
         inputRange.push(inputString);
       }
    } 
    return inputRange
  }
numberRange(2);