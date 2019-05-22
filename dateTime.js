let val;

const today = new Date();
let birthday = new Date('2-14-2001 15:30:00');
birthday = new Date('February 14 2001 15:30:00');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(17);
birthday.setFullYear(2001);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(30);

console.log(birthday);

// dates are zero based. keep in mind when getting or setting dates