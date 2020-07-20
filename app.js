// General loops

// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`${i} is My favorit Number`);
//     continue;
//   } else if (i === 6) {
//     break;
//   }
//     console.log(i);
// }

// while loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Do while loop
// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i <= 10)

// loop through Array
const fruits = ["Apple", "Orange", "Graps"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// forEach
// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// Arrays of Object

const users = [
  { id: 1, name: "Dumilla" },
  { id: 2, name: "Mahir" },
  { id: 3, name: "Dullah" },
];
const ids = users.map(function (user) {
  return user.id;
});
// console.log(ids);

const person = {
  firstName: "Mahir",
  lastName: "Juma",
  age: 25,
};

// For In
for (let x in person) {
  console.log(`${x}: ${person[x]}`);
}
