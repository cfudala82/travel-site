var $ = require('jquery');
var Person = require('./modules/Person');

alert("This is a test for our webpack automation,123");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Doe", "green");
jane.greet();

$('h1').remove();
