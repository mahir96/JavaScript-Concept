const now = moment();
let val;

// val = now.minute(1);
val = now.minute();
// val = now.add(1, "year").subtract(20, "day");
val = now.format();
val = now.format("MMMM, Do, YYYY");
val = now.fromNow();
// you can also pass arg moment([2001])

const a = moment();
const b = moment([2008]);
let period;
period = a.from(b);
console.log(period.toString());
