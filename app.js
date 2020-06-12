// FUNCTION DECLARATION

function person() {
  return "Mahir";
}

// console.log(person());

function person(firstName = "Mahir", age = 24) {
  return `hellow ${firstName} your age is ${age}`;
}

// console.log(person());

// FUNCTION EXPRESS
const myTest = function () {
  return "Positve ";
};
// console.log(myTest());

const calArea = function calArea(width = 8, height = 6) {
  return width * height;
};
// console.log(calArea());
const Squire = function mySquire(width = 5, height = 4) {
  return width * height;
};
console.log(Squire());
