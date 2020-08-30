//Escaping Literal Quotes in Strings
//var myStr = "I am a "double quoted"string in "double quotes""; //trying to use quotes inside a string will throw an error
//Use backslash before each quote inside the main string for JS to identify it as one complete string
var myStr = "I am a \"double quoted \"string in \"double quotes\""; //JS reads \" as only "
console.log(myStr); //This will print the quotation marks without backslashes

//Quoting Strings with single quotes
//We can simply quote a string with single quotes and then JS will read the quotation marks without the use of backslashes
//We can also enclose the string in back ticks ` and use both single and quotes within a string
var myStr = 'I am a "double quoted "string in "double quotes"';
console.log(myStr);

var myStr = "First Line\n\t\\Second Line\nThird Line"; //Escape sequences in JS
console.log(myStr);

//Find a letter at any index
var firstLetterOfLastName = "";
var lastName = "Sandhu";
firstLetterOfLastName = lastName[0];  //Indexing starts at 0, so it's called zero based indexing
console.log(firstLetterOfLastName);

//String Immutability
var myStr = "Jello World";
myStr[0] = "H"; //This will not work as strings are immutable 
console.log(myStr);
myStr = "Hello World";  //So we have to do this instead

//Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
	return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("player", "tall", "scored", "beautifully"));
