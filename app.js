// General loops
let num = 8;
// for (let i = 0; i < num; i++) {
//   console.log(i);
// }

// for (let i = 0; i < num; i++) {
//   if (i === 3) {
//     console.log(`${i} is my favorit number`);
//     continue;
//   } else if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// While loop
// let i = 0;
// while (i < num) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < num);

// for each
const fruits = ["Apple", "Graps", "Banana"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// const myPush = fruits.map(function (fruit) {
//   return fruit;
// });
// console.log(myPush.push("Orange"));
// console.log(myPush);

// const users = [
//   { id: 1, name: "Mahir" },
//   { id: 2, name: "Afla" },
//   { id: 3, name: "Juma" },
// ];
// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(typeof ids);

const id = 100;

// if (id == 100) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// if (id !== 101) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// Value and type
// if (id === 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// if (id !== 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// if (typeof id !== "undefined") {
//   console.log(`the id Is ${id}`);
// } else {
//   console.log("No id ");
// }

const name = "Mahir";
const age = 17;
// if (age > 0 && age < 12) {
//   console.log(`${name} your a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log("you an teenage");
// } else {
//   console.log("your an Adult");
// }

if (age < 15 || age > 30) {
  console.log("you can not do an exam");
} else {
  console.log("you can do exam");
}
