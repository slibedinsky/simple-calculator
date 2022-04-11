const display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let operation = "";
let inFirstNumber = true;
let afterEqual = false;

function percentage() {
  if (inFirstNumber === true) {
    firstNumber = (Number(firstNumber) / 100).toString();
    display.innerHTML = firstNumber;
  } else {
    secondNumber = (Number(secondNumber) / 100).toString();
    display.innerHTML = secondNumber;
  }
}

function dot() {
  if (inFirstNumber) {
    if (firstNumber.includes(".")) {
      alert("Invalid entry");
    } else {
      firstNumber += ".";
      display.innerHTML = firstNumber;
    }
  } else {
    if (secondNumber.includes(".")) {
      alert("Invalid entry");
    } else {
      secondNumber += ".";
      display.innerHTML = secondNumber;
    }
  }
}

function plus() {
  if (inFirstNumber === true) {
    inFirstNumber = false;
    operation = "plus";
  } else {
    equal();
    operation = "plus";
    inFirstNumber = false;
  }
  afterEqual = false;
}

function minus() {
  if (inFirstNumber === true) {
    inFirstNumber = false;
    operation = "minus";
  } else {
    equal();
    operation = "minus";
    inFirstNumber = false;
  }
  afterEqual = false;
}

function multiply() {
  if (inFirstNumber === true) {
    inFirstNumber = false;
    operation = "multiply";
  } else {
    equal();
    operation = "multiply";
    inFirstNumber = false;
  }
  afterEqual = false;
}

function divide() {
  if (inFirstNumber === true) {
    inFirstNumber = false;
    operation = "divide";
  } else {
    equal();
    operation = "divide";
    inFirstNumber = false;
  }
  afterEqual = false;
}

function equal() {
  if (operation === "plus") {
    firstNumber = (Number(firstNumber) + Number(secondNumber)).toFixed(10);
  } else if (operation === "minus") {
    firstNumber = (Number(firstNumber) - Number(secondNumber)).toFixed(10);
  } else if (operation === "multiply") {
    firstNumber = (Number(firstNumber) * Number(secondNumber)).toFixed(10);
  } else if (operation === "divide") {
    firstNumber = (Number(firstNumber) / Number(secondNumber)).toFixed(10);
  }
  display.innerHTML = firstNumber;
  secondNumber = "";
  operation = "";
  inFirstNumber = true;
  afterEqual = true;
}

function number() {
  if (afterEqual === true) {
    firstNumber = "";
    afterEqual = false;
  }
}

function ac() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  inFirstNumber = true;
  display.innerHTML = 0;
}

function sign() {
  if (inFirstNumber && Number(firstNumber) > 0) {
    firstNumber = "-" + firstNumber;
    display.innerHTML = firstNumber;
  } else if (inFirstNumber && Number(firstNumber) < 0) {
    firstNumber = firstNumber.substring(1);
    display.innerHTML = firstNumber;
  } else if (!inFirstNumber && Number(secondNumber) > 0) {
    secondNumber = "-" + secondNumber;
    display.innerHTML = secondNumber;
  } else if (!inFirstNumber && Number(secondNumber) < 0) {
    secondNumber = secondNumber.substring(1);
    display.innerHTML = secondNumber;
  }
}
function number0() {
  if (inFirstNumber && firstNumber) {
    firstNumber += "0";
    display.innerHTML = firstNumber;
  } else if (inFirstNumber === false && secondNumber) {
    secondNumber += "0";
    display.innerHTML = secondNumber;
  }
}

function number1() {
  if (inFirstNumber) {
    firstNumber += "1";
    display.innerHTML = firstNumber;
  } else {
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
