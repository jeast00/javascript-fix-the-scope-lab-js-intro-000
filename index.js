var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal;
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  var animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

<<<<<<< HEAD
var funkyFunction = function() {
  return function() {
    return "FUNKY!";
=======
function funkyFunction() {
  var funky = 'FUNKY';
  return function inner() {
    return funky;
>>>>>>> 6d4ca5948fc92ace92d2c0d23f2d8c3a242b376b
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = function();
=======
var theFunk = funkyFunction();
>>>>>>> 6d4ca5948fc92ace92d2c0d23f2d8c3a242b376b
