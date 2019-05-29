// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);

// ALERT
// window.alert('Hello World!');

// PROMPT
// const input = prompt();
// alert(input)

// CONFIRM
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('No');
// }

let val;

// OUTER HEIGHT AND WIDTH
// val = window.outerHeight;
// val = window.outerWidth;

// INNER HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// REDIRECT
// window.location.href = 'http://google.com'
// RELOAD
// window.location.reload();

// HISTORY OBJECT

// window.history.go(-2) // Takes you back 2 places

// val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);