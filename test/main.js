// if statement and if condition
const num = 100;
// if (num === 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

if (num !== 100) {
  //   console.log("Correct");
} else {
  //   console.log("Incorrect");
}

if (typeof num !== "number") {
  //   console.log("Correct");
} else {
  //   console.log("Incorrect");
}

if (num > 99) {
  //   console.log("correct");
} else {
  //   console.log("Incorrect");
}

const age = 4;
if (age > 0 && age < 12) {
  //   console.log("Your are a child");
} else if (age >= 13 && age <= 15) {
  //   console.log("Your are a teenage");
} else {
  //   console.log("your an adult ");
}

if (age < 15 || age > 65) {
  console.log("Can not run");
} else {
  console.log("your registerd");
}

let val;
val = num > 50 ? "Correct" : "Incorrect";
console.log(val);
