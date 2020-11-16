var currentPin = 1;

function setPin(digit) {
  var pinID = "pin-" + currentPin;
  document.getElementById(pinID).innerHTML = digit;
  currentPin++;
  if(currentPin == 5) {
    document.getElementById("submit").style.display = "block";
  }
}

