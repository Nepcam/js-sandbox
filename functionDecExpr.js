// FUNCTION DECLARATION

function greet(firstName = 'Cameron', lastName = 'Nepe'){
    // if(typeof firstName === 'undefined'){
    //     firstName = 'Cameron'
    // }
    // if(typeof lastName === 'undefined'){
    //     lastName = 'Nepe'
    // }
   // console.log('Hello');
   return 'Hello ' + firstName + ' ' + lastName; // Usually you return something from a  function
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3) {
    return x*x;
};

// console.log(square());

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('Hi ' + name);
// })('Bitch!');

// PROPERTY METHODS - When a function is put inside a object, its called a METHOD

const todo = {
    add: function(){
        console.log('Add todo..')
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...')
}

todo.repeat = function(){
    console.log('Do it again boy!!')
}

// Call the function by the variable and pass in the (key e.g add: )
todo.add();
todo.edit(22);
todo.delete();
todo.repeat();