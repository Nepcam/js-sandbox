const firstName = 'Liam';
const lastName = 'Nepe';
const age = 12;
const str = 'Hello there my name is Cam';
const tags = 'web design,web development,programming';

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
val = firstName.toLowerCase();

val = firstName[2];

// indexof()
val = firstName.indexOf('2');
val = firstName.lastIndexOf('1');

// charAt()
val = firstName.charAt(2);
// Get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Cam', 'Darius');

// includes()
val = str.includes('Foo');

console.log(val);