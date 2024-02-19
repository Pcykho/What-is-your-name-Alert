var name = prompt("What is your name?");

var firstLetter = name.slice (0,1);
var restLetters = name.slice (1,name.length);

var letterUppercase = firstLetter.toUpperCase();
var letterLowercase = restLetters.toLowerCase();

alert ("Hello, " + letterUppercase + letterLowercase);