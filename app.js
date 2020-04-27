const fruit = ["Apple", "Orange"];
let val;

fruit.splice(2, 0, "Banana", "lemon");
fruit.splice(1, 1, "Strawberry");
fruit.splice(2, 1, "Orange");
fruit.splice(0, 2, "Banana", "Cassava", "Carrot");
fruit.splice(2, 1, "Apple");
fruit.splice(-2, 1, "Strawberry");
fruit.splice(-3, 1, "Banana");
fruit.splice(0, 1, "Apple");
fruit.splice(2);
val = fruit.length;
console.log(fruit);
console.log(val);
