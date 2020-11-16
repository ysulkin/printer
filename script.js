var currentPin = 1;

function setPin(digit) {
  var pinID = "pin-" + currentPin;
  document.getElementById(pinID).innerHTML = digit;
  currentPin++;
  if(currentPin == 5) {
    document.getElementById("submit").style.display = "block";
  }
}

function showSeperatorOptions() {
  var check = document.getElementById("checkbox");
  var options = document.getElementById("seperator-options");

  if (check.checked == true) {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
}