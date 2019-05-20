const name = 'Cameron';
const age = 42;
const job = 'Front End Developer';
const city = 'Manutuke';
let html;

// Without template strings (ES5 way)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job '+ job + ' </li><li>City: ' + city +' </li></ul>';

html = '<ul>' +
            '<li>Name: ' + name + '</li> ' +
            '<li>Age: ' + age + '</li> ' +
            '<li>Job: ' + job + '</li> ' +
            '<li>City: ' + city + '</li> '
        '</ul>';

function hello() {
    return 'kia ora bro!!'
};

// With template strings
html = `                                
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${10 * 10}</li>
        <li>${hello()}</li>
        <li>${age > 40 ? 'Over 40' : 'Under 40'}</li>
    </ul>
`; // Using back-ticks ` `; 

document.body.innerHTML = html;
