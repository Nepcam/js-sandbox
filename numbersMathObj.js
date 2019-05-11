const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2); // 8 x 8 = 64
val = Math.min(2,33,4,1,55,6,3,-2); // min returned the lowest number -2.
val = Math.max(2,33,4,1,55,6,3,-2); // max returned the highest number 55.
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1); // output a random number between 1-20.

console.log(val);