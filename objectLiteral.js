const person = {
    firstName: 'Cam',
    lastName: 'Nepe',
    age: 42,
    email: 'cameron@pikitech.com',
    hobbies: ['waka ama', 'crossfit'],
    address: {
        city: 'Manutuke',
        state: 'TuranganuiAKiwa'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1]; // takes the second item in the hobbies array []
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Mason', age: 19},
    {name: 'Darius', age: 18},
    {name: 'Liam', age: 12},

];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
