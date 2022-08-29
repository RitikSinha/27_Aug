/**
4. Check if the string contains a word Script using includes() method.
 * 
 */
var randomString = "we can run script with the help of node js";
var anotherString = "we can run app.js with the help of node js";

var word = "script";
var isScript = randomString.includes(word);
var isAnother = anotherString.includes(word);

console.log(isScript);
console.log(isAnother);
