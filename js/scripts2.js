//Business Logic
function numberRange(input) {
  var inputRange = [];
  // var one = "Beep!";
  // var two = "Boop!";
  // var three = "I'm sorry, Dave. I'm afraid I can't do that."
  for (var i=0; i <= input; i++) {
    // alert("this is working");
    console.log(i);
    var inputString = input.toString();
    // alert("userNumber");
    if (inputString.includes(1)) {
      inputRange.push("Beep!");
       }
  }
}