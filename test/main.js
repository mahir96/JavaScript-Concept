const fruit = ["Apple", "Mango", "Graps"];
const num = new Array("Apple", "Mango", "Graps");
let val;

val = Array.isArray(fruit);
val = fruit[2];
val = fruit.push("Banana");
val = fruit.unshift("Orange");
val = fruit.pop();
val = fruit.shift();
val = fruit.splice(0, 0, "Orange");
val = fruit.splice(1, 3);
val = fruit;
val = fruit.concat(num);
console.log(val);
