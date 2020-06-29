var a = Math.round(Math.random() * 10 + 1);
var b = Math.round(Math.random() * 10 + 1);
var add1 = Math.round(Math.random() * 99999 + 1);
var add2 = Math.round(Math.random() * 99999 + 1);
function getRndInteger(max) {
  return Math.round(Math.random() * (max + 1));
}
var sub1 = Math.round(Math.random() * 99999 + 1);
var sub2 = getRndInteger(sub1);
var multiplyDigits = a * b;
var subDigits = sub1 - sub2;
var addDigits = add1 + add2;
function multi() {
  document.getElementById("multiplyDigit1").innerHTML = a;
  document.getElementById("multiplyDigit2").innerHTML = b;
}
function addit() {
  document.getElementById("addDigit1").innerHTML = add1;
  document.getElementById("addDigit2").innerHTML = add2;
}
function subit() {
  document.getElementById("subDigit1").innerHTML = sub1;
  document.getElementById("subDigit2").innerHTML = sub2;
}
function multiply() {
  var c = document.getElementById("multiplyDigits").value;
  if (c == multiplyDigits) {
    alert("Good Job");
    document.getElementById("hide").style.display = "none";
    document.getElementById("goBack").style.display = "inline";
    document.getElementById("tryAgain").style.display = "inline";
  } else {
    alert("Try Again, Arth, Answer is " + multiplyDigits);
    document.getElementById("hide").style.display = "none";
    document.getElementById("goBack").style.display = "inline";
    document.getElementById("tryAgain").style.display = "inline";
  }
}
function add() {
  var c = document.getElementById("addDigits").value;
  if (c == addDigits) {
    alert("Good Job");
    document.getElementById("hide").style.display = "none";
    document.getElementById("goBack").style.display = "inline";
    document.getElementById("tryAgain").style.display = "inline";
  } else {
    alert("Try Again, Arth, Answer is " + addDigits);
    document.getElementById("hide").style.display = "none";
    document.getElementById("goBack").style.display = "inline";
    document.getElementById("tryAgain").style.display = "inline";
  }
}
function subtract() {
  var c = document.getElementById("subDigits").value;
  if (c == subDigits) {
    alert("Good Job");
    document.getElementById("hide").style.display = "none";
    document.getElementById("goBack").style.display = "inline";
    document.getElementById("tryAgain").style.display = "inline";
  } else {
    alert("Try Again, Arth, Answer is " + subDigits);
    document.getElementById("hide").style.display = "none";
    document.getElementById("goBack").style.display = "inline";
    document.getElementById("tryAgain").style.display = "inline";
  }
}
