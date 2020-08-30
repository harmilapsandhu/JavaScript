//Difference between var and let keyword
//let does not allow you to declare a variable twice
//Scope of let keyword in only where it is defined
//We can use "use strict"; at the top to catch common coding mistakes in our program
function checkScope() {
	"use strict";
	let i = "function scope";
	if (true) {
		let i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}
checkScope();  //If we var instead of let, it will be block scope in both cases

//Declare a read only variable with const Keyword
//const has all the features of let but it's also read-only so you cannot reassign a const (like final in java)
//This is useful if you know you're never going to reassign that variable
//We can however change the values of an array declared as const using indexes

//Write arrow function with parameters
var myConcat = function(arr1, arr2) {
	return arr1.concat(arr2);
};
console.log(myConcat([1,2], [3,4,5]));
//This can be written as below using arrow functions
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));

//Spread operator can be used by three dots (...)

//Pretty much skipped destructuring concepts in JS










