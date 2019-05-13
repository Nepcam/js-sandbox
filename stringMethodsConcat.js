const firstName = 'Liam';
const lastName = 'Nepe';
const age = 12;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Cameron ';
val += 'Nepe';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length; // counts the number of letters in the string

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val =firstName.toLowerCase();




console.log(val);