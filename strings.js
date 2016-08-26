
//The text input should only accept letters. No numbers.

var button = document.getElementById("button");
button.addEventListener("click", outputStuff);

var output = document.getElementById("output");

var textBox = document.getElementById("textbox");

/*Implement the logic in the reversal function that reverses the order of the characters
in the string, and outputs the result in the DOM, below the text input.*/

function reversal(value1) {
  return value1.split("").reverse().join("");
}

/*Implement the logic in the alphabits function that return the characters in
alphabetical order, and outputs the result in the DOM, below the text input.*/

function alphabits(value2) {
  return value2.split("").sort("").join("");
}

/*Implement the logic in the palindrome function that determine whether the string is a palindrome.
If it is, display the text "Your string is a palidrome" in the DOM, below the text input.*/

function palindrome(value3) {
  return value3 === reversal(value3);
}

var testString = "";

function outputStuff (){
  testString = textBox.value
  output.innerHTML = "<div>" + testString + "</div>";
  output.innerHTML += "<div>" + reversal(testString) + "</div>";
  output.innerHTML += "<div>" + alphabits(testString) + "</div>";
  output.innerHTML += "<div>" + palindrome(testString) + "<div>";
  }

