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
        '<li>City: ' + city + '</li> ';

document.body.innerHTML = html;