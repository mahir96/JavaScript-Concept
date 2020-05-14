const today = new Date();
const birthday = new Date("2001-6-13");

let val;

val = today;

// Get
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getTime();

// Set
birthday.setMonth(5);
birthday.setFullYear(1995);
birthday.setDate(26);
birthday.setHours(22);
birthday.setMinutes(27);
birthday.setSeconds(48);
console.log(birthday);
