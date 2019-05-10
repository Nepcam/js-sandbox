// // var, let, const

// var name = 'Liam Nepe';
// console.log(name);
// name = 'Darius Nepe';
// console.log(name);

// // Init var (Initialise)
// var greeting;
// console.log(greeting);
// greeting = 'Kia ora';
// console.log(greeting);

// // a variable can have letters, numbers, _, $
// // a variable cannot start with a number
// // var 1name = 'Mason' this doesnt work, could change number to a $ or _, but not encouraged
 

// // Multi word vars
// var firstName = 'Cameron'; // Camel case
// var first_name = 'Mason'; // Underscore
// var Firstname = 'Darius'; // Pascal case
// var firstname = 'Liam';

// console.log(Firstname)

//LET
// let name;
// name = 'Liam Nepe';
// console.log(name);
// name = 'Darius Nepe';
// console.log(name);

//CONST
// const name = 'Mason';
// console.log(name);
// Cannot reassign this const variable
// name = 'Darius';
// Have to assign a value
// const greeting; has to be declared as a value

const person = {
    name: 'Cameron',
    age: 42
};

person.name = 'Mason' // We can change the data within that person object
person.age = 19

// console.log(person);

const numbers = [1,2,3,4,5];

numbers.push(6);
numbers = [1,2,3,4,5,6]; // we cannot redeclare a new array

console.log(numbers);