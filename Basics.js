/*
 Use of semicolon is not needed but it's best to use it
 
 */
var a; //Assigning a variable or Uninitialized variables
a = 7; //Declaring an already assigned variable 
	
var b = 2; //Assigning & Declaring a variable

b = a; //Assigned the contents of a to b

console.log(b)  //Allows you to see things in the console

var c = "I am a ";
c = c + "String!";
console.log(c)

//Variable names and function name in Javascript are case sensitive. So it's best practice to use camel casing
var properCamelCase;
properCamelCase = "Best Practice";

//We can assign decimal or floating point numbers in Javascript
var ourDecimal = 5.7;

//To get the remainder - frequently used to find if the number id odd or even
var remainder;
remainder = 17 % 7;
console.log(remainder);

var d = 12;
//d = d + 6;
d += 6;  //Instead of using the above pattern, we can use this pattern as way of a short cut (can be used with +,-,*,/)
console.log(d)  
//We can also use this concept to concatenate strings
var myStr = "This is the first sentence. " 
myStr += "This is the second sentence."
console.log(myStr);

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);


