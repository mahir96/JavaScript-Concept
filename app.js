const today = new Date();
const birthday = new Date("9-6-1995");
let val;

val = today;

// Get
val = today.getMonth();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
// val = today.getTime();

birthday.setMonth(5);
birthday.setDate(26);
birthday.setHours(8);
birthday.setMinutes(34, 22);
console.log(birthday);
