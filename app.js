// Arrays

const fruit = ["Apple", "Banana", "Graps"];
const food = ["Ugali", "Wali", "Tambi"];
const num = new Array(5, 30, 50, 8, 60, 100);

let val;

val = fruit.length;
val = Array.isArray(food);
val = fruit[2];
fruit[3] = "Makande";
val = fruit.push("Orange");
val = fruit.splice(3, 1);
val = fruit.unshift("lemon");
val = fruit.pop();
val = fruit.shift();
val = fruit.reverse();
val = fruit.concat(food);
val = fruit.sort();
// compare function
val = num.sort((a, b) => {
  return a - b;
});
// or
val = num.sort(function (a, b) {
  return a - b;
});
console.log(fruit);
console.log(val);
