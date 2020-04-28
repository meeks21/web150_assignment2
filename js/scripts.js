

// asks the first question
var name = prompt("Let's play the sum game.\r\n" + "Please enter your name");

// asks the second question
var firstNumber = prompt("Enter first number");

// asks the second question
var secondNumber = prompt("Enter second number");


var total = parseInt(firstNumber) + parseInt(secondNumber);
document.write("Hi, " + name + "! The sum of " + firstNumber + " + " + secondNumber + " is " + total); 