const num = 100;

// Equal Operator
// if (num == 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// Not Equal
// if (num != 101) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// if (num === 100) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// if (num !== 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// if (typeof num !== "number") {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// if (typeof num !== "undefined") {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// const color = "Purple";
// if (color === "red") {
//   console.log("color is red");
// } else if (color === "Purple") {
//   console.log(`color is ${color}`);
// } else {
//   console.log("Not Available");
// }

const name = "Mahir";
const age = 18;

// if (age > 0 && age < 12) {
//   console.log(`${name} is a Child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a Teenage`);
// } else {
//   console.log(`${name} is an Adult`);
// }

// if (age <= 15 || age >= 25) {
//   console.log(`${name} can not Run`);
// } else {
//   console.log(`${name} is registerd`);
// }

// Ternary Operator
console.log(age <= 15 || age >= 25 ? `${name} Can not run` : `${name} can run`);
