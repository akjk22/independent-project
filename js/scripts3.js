function numberRange(input) {
  var inputRange = [];
  // var one = "Beep!";
  // var two = "Boop!";
  // var three = "I'm sorry, Dave. I'm afraid I can't do that."
  for (var i=0; i <= input; i++) {
    // alert("this is working");
    var inputString = input.toString();
    // alert("userNumber");
    if (i.includes(3)) {
        inputRange.push("yo");
       } else if (i.includes(2)) {
         inputRange.push("Boop!");
       } else if (i.includes(1)) { 
        inputRange.push("Beep!");
       
       } else {
         inputRange.push(i);
       }
    } 
    return input
    numberRange(2);
  }
