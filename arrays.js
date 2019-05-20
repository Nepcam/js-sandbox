// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if it is an Array
val = Array.isArray(numbers);
// Get single value. Arrays are zero based 
val = numbers[3];
val = numbers[0];
// Insert into Array
numbers[2] = 100;

console.log(numbers);
console.log(val);
