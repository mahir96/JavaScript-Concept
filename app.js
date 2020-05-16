// @ts-check

const fruit = ["Apple", "Orange"];

let val;

// Inserting two element before Orange
fruit.splice(1, 0, "Banana", "Graps");

// Inserting one element after Orange
fruit.splice(4, 0, "Strawberry");

// Removing one element
fruit.splice(2, 1);

// Removing one element at index -1 and Replace new element
fruit.splice(-1, 1, "Blackberry");

// adding one element
fruit.splice(2, 0, "Graps");

// Replacing Orange to lemon
fruit.splice(3, 1, "lemon");

// Removing 2 element from index 0 and insert Strawberry,pears,tomato
fruit.splice(0, 2, "Strawberry", "Pears", "Tomato");

// Replacing two element starting at index 0
fruit.splice(0, 2, "Apple", "Orange");

// Removing 1 element from index -4
fruit.splice(-4, 1);

// Removing 2 element from index 3
fruit.splice(3, 2);

// Removing all element after index 1
fruit.splice(2, 1);

// Push method
fruit.push("Lemon");

fruit.splice(0, 1);

fruit.unshift("apple");

fruit.shift();

fruit.pop();

fruit.splice(0, 0, "Apple");

val = fruit.length;
console.log(fruit);
console.log(val);
