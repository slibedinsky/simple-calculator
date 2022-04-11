const display = document.getElementById("display");
let firstNumber = "0";
let secondNumber = "";
let operation = "";
let inFirstNumber = true;
let inSecondNumber = false;
let inTransition = false;
let inAfterEqual = false;

display.innerHTML = firstNumber;

//resolving the floating problem that 1+2 = 3.000000000000004
function toStringToNumberToString(number) {
  return parseFloat(number.toFixed(10)).toString();
}

function dot() {
  if (inFirstNumber) {
    if (firstNumber.includes(".")) {
      alert("Invalid entry");
    } else {
      firstNumber += ".";
      display.innerHTML = firstNumber;
    }
  } else if (inSecondNumber) {
    if (secondNumber.includes(".")) {
      alert("Invalid entry");
    } else {
      secondNumber += ".";
      display.innerHTML = secondNumber;
    }
  } else if (inAfterEqual) {
    if (firstNumber.includes(".")) {
      alert("Invalid entry");
    } else {
      firstNumber += ".";
      display.innerHTML = firstNumber;
      inAfterEqual = false;
      inFirstNumber = true;
    }
  }
}

function plus() {
  if (inFirstNumber) {
    operation = "plus";
    inFirstNumber = false;
    inTransition = true;
  } else if (inSecondNumber) {
    equal();
    operation = "plus";
    inSecondNumber = false;
    inTransition = true;
  } else if (inAfterEqual) {
    operation = "plus";
    inAfterEqual = false;
    inTransition = true;
  }
}

function minus() {
  if (inFirstNumber) {
    operation = "minus";
    inFirstNumber = false;
  } else if (inSecondNumber) {
    equal();
    operation = "minus";
    inSecondNumber = false;
  } else if (inAfterEqual) {
    operation = "minus";
    inAfterEqual = false;
  }
  inTransition = true;
  console.log(firstNumber, secondNumber);
}

function multiply() {
  if (inFirstNumber) {
    operation = "multiply";
    inFirstNumber = false;
    inTransition = true;
  } else if (inSecondNumber) {
    equal();
    operation = "multiply";
    inSecondNumber = false;
    inTransition = true;
  } else if (inAfterEqual) {
    operation = "multiply";
    inAfterEqual = false;
    inTransition = true;
  }
}

function divide() {
  if (inFirstNumber) {
    operation = "divide";
    inFirstNumber = false;
    inTransition = true;
  } else if (inSecondNumber) {
    equal();
    operation = "divide";
    inSecondNumber = false;
    inTransition = true;
  } else if (inAfterEqual) {
    operation = "divide";
    inAfterEqual = false;
    inTransition = true;
  }
}

function equal() {
  if (inSecondNumber && operation != "") {
    if (operation === "plus") {
      firstNumber = toStringToNumberToString(
        Number(firstNumber) + Number(secondNumber)
      );
    } else if (operation === "minus") {
      firstNumber = toStringToNumberToString(
        Number(firstNumber) - Number(secondNumber)
      );
    } else if (operation === "multiply") {
      firstNumber = toStringToNumberToString(
        Number(firstNumber) * Number(secondNumber)
      );
    } else if (operation === "divide") {
      firstNumber = toStringToNumberToString(
        Number(firstNumber) / Number(secondNumber)
      );
    }
    display.innerHTML = firstNumber;
    secondNumber = "";
    operation = "";
    inSecondNumber = false;
    inAfterEqual = true;
  }
}

function number() {
  if (inAfterEqual) {
    firstNumber = "";
    inAfterEqual = false;
    inFirstNumber = true;
  }
  if (inFirstNumber && firstNumber === "0") {
    firstNumber = "";
  }
  if (inSecondNumber && secondNumber === "0") {
    secondNumber = "";
  }
  if (inTransition) {
    inTransition = false;
    inSecondNumber = true;
  }
}

function ac() {
  firstNumber = "0";
  secondNumber = "";
  operation = "";
  inFirstNumber = true;
  inAfterEqual = false;
  inSecondNumber = false;
  inTransition = false;
  display.innerHTML = firstNumber;
}

function sign() {
  if ((inFirstNumber || inAfterEqual) && Number(firstNumber) > 0) {
    firstNumber = "-" + firstNumber;
    display.innerHTML = firstNumber;
  } else if ((inFirstNumber || inAfterEqual) && Number(firstNumber) < 0) {
    firstNumber = firstNumber.substring(1);
    display.innerHTML = firstNumber;
  } else if (inSecondNumber && Number(secondNumber) > 0) {
    secondNumber = "-" + secondNumber;
    display.innerHTML = secondNumber;
  } else if (inSecondNumber && Number(secondNumber) < 0) {
    secondNumber = secondNumber.substring(1);
    display.innerHTML = secondNumber;
  }
}

function percentage() {
  if (inFirstNumber || inAfterEqual) {
    firstNumber = toStringToNumberToString(Number(firstNumber) / 100);
    display.innerHTML = firstNumber;
  } else if (inSecondNumber) {
    secondNumber = toStringToNumberToString(Number(secondNumber) / 100);
    display.innerHTML = secondNumber;
  }
}

function number0() {
  if (inFirstNumber) {
    firstNumber += "0";
    display.innerHTML = firstNumber;
  } else if ((inSecondNumber || inTransition) && secondNumber != "0") {
    secondNumber += "0";
    display.innerHTML = secondNumber;
  }
}

function number1() {
  if (inFirstNumber) {
    firstNumber += "1";
    display.innerHTML = firstNumber;
  } else if (inSecondNumber) {
    secondNumber += "1";
    display.innerHTML = secondNumber;
  }
}

function number2() {
  if (inFirstNumber) {
    firstNumber += "2";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "2";
    display.innerHTML = secondNumber;
  }
}

function number3() {
  if (inFirstNumber) {
    firstNumber += "3";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "3";
    display.innerHTML = secondNumber;
  }
}

function number4() {
  if (inFirstNumber) {
    firstNumber += "4";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "4";
    display.innerHTML = secondNumber;
  }
}

function number5() {
  if (inFirstNumber) {
    firstNumber += "5";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "5";
    display.innerHTML = secondNumber;
  }
}

function number6() {
  if (inFirstNumber) {
    firstNumber += "6";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "6";
    display.innerHTML = secondNumber;
  }
}

function number7() {
  if (inFirstNumber) {
    firstNumber += "7";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "7";
    display.innerHTML = secondNumber;
  }
}

function number8() {
  if (inFirstNumber) {
    firstNumber += "8";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "8";
    display.innerHTML = secondNumber;
  }
}

function number9() {
  if (inFirstNumber) {
    firstNumber += "9";
    display.innerHTML = firstNumber;
  } else {
    secondNumber += "9";
    display.innerHTML = secondNumber;
  }
}
