//Array can store any data types separated with commas
var myArray = ["Aubameyang", 14];
//Nested Array of Multi-dimensional Array
var myArray = [["Pepe", 19], ["Torreira", 11]];
//Find an element in an Array
var myData = myArray[1][0];
console.log(myData);
//Modify Arrays with indexes (Strings could not be modified using indexes as we saw earlier as they are immutable)
myArray [0][0] = "Cazorla";
myData = myArray[0][0];
console.log(myData);
//Append data to end of an Array
myArray.push(["Lacazette", 9]);
console.log(myArray);
//Append data at the front of an Array
myArray.unshift(["Ozil", 10]);
console.log(myArray);
//To delete the last entry of an Array
myArray.pop();
console.log(myArray);
//To delete the first element of an Array
myArray.shift();
console.log(myArray);