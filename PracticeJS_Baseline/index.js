//

var currentYear = new Date().getFullYear();
const birtyear = prompt("what is your year of birth ? ");

var age = parseInt(currentYear) - parseInt(birtyear);
console.log(age);

function test_function() {
  // alert("this is a test function");

  let number1 = prompt("type first number: ");
  let number2 = prompt("type second number: ");
  document.getElementById("p2").innerHTML =
    "sum of two numbers are " + (parseInt(number1) + parseInt(number2));
}
