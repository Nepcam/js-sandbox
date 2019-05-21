// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if it is an Array
val = Array.isArray(numbers); // ('Hello') returned a false because its a string

// Get single value. Arrays are zero based 
val = numbers[3];
val = numbers[0];

// Insert into Array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on to end
numbers.push(250);

// Add on to front
numbers.unshift(120);

// Take off from end
numbers.pop();

// Take off from front
numbers.shift();

// Splice values
numbers.splice(1,1); // it removes from where we want it to start and where we want it to end

// Reverse
numbers.reverse();

// Concatenate Arrays
val = numbers.concat(numbers2);

// Sorting Arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function" Places order in numerical order
val = numbers.sort(function(x, y){
    return x - y;
});

// Reverse sort Places order in reverse numerical order
val = numbers.sort(function(x, y){
    return y - x;
}); 

// Find
function over50(num){
    return num > 50;
}

val = numbers.find(over50)

console.log(numbers);
console.log(val);
