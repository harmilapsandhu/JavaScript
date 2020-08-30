//Functions allow us to create reusable code in JS
//We can use the function name to call and run anything that is defined in a function
function ourReusableFunction() {
	console.log("Hello World")
}
ourReusableFunction(); //This will print the contents of above defined function

//Passing values to functions with Arguments
function ourFunctionWithArgs(a, b) {
	console.log(a / b);
}
ourFunctionWithArgs(50, 10);

//Return a value from function with return
function minusSeven(num) {
	return num - 7;
}
console.log(minusSeven(10));

//Undefined value returned from a function 
var sum = 5;
function addTen() {
	sum = sum + 10;
	//console.log(sum);
}
console.log(addTen()); //This will return undefined
addTen();              //This will return 15 when then log statement is uncommented in the function

//Stand in Line
function nextInLine(arr, item) {
	arr.push(item); //pushes an item defined 6 to the end of queue
	arr.shift(); //pops the first item
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify converts an Array to a string that can be printed out in console
nextInLine(testArr, 6);
console.log("After: " + JSON.stringify(testArr));

