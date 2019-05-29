// FOR LOOP

for(let i = 0; i < 10; i++){
    if(i === 2){    
        console.log('2 is my favourite number');
        continue;
    }  
    if(i === 5){
        console.log('Stop te loop')
        break;
    }  
    console.log('Number '+ i);
}

// EXAMPLE i++ = (i = i + 1) up until (i) is no longer less than 10. 


// WHILE LOOP

let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++
}


// DO WHILE LOOP


let i = 100;

do {
    console.log('Number ' + i);
    i++
}

while(i < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Holden', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// FOR EACH
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// MAP
const users = [
    {id:1, name:'Cameron'},
    {id:2, name:'Mason'},
    {id:3, name:'Darius'},
    {id:4, name:'Liam'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

const user = {
    firstName: 'Liam',
    lastName: 'Nepe',
    age: 12
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}