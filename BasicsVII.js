//Iterate with While Loops
var myArray = [];

var i = 0;
while(i < 5) {
	myArray.push(i);
	i++;
}
console.log(myArray);

//Iterate with For Loops
var ourArray = [];

for(var i = 0; i<10; i++) { //Initialization, Condition, Increment
	ourArray.push(i)
}
console.log(ourArray);

//Nested For Loops
var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
function multiplyAll(arr) {
	var product = 1;
	for (i = 0; i<arr.length; i++) {
		for (j = 0; j<arr[i].length; j++) {
			product *= arr[i][j];
		}
	}
	return product;
}
console.log(product);

//Do while Loop - A do while loop runs at least once
var doArray = [];
var i = 1;
do {
	doArray.push(i);
	i++;
} while (i < 5)
console.log(i, doArray);

//Create Random Whole Number (between 0 and 9)
function randomWholeNumber() {
	return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());

//Random Whole Number between any two numbers
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(20, 30);
console.log(myRandom);

//Use the parseInt Function - It takes a string and returns an integer
function convertToInteger(str) {
	return pasreInt(str);
}
console.log("63");

//Use the conditional (Ternary) Operator
function checkEqual(a, b) {
	return a === b ? true : false;  //condition ? state-if-true : statement-if-false;
}
console.log(checkEqual(1, 2));

// Multiple conditional (Ternary) Operator
function checkSign(num){
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-3));


