//Returning boolean values from functions
function isLess(a, b) {
	return a < b;
}
console.log(isLess(10, 13)); //This will return true of false

//Defining Objects in JS
var ourDog = {                        //ourDog is an object
		"name": "Camper",			  //name is the property & Camper is the value	
		"legs": 4,
		"tails": 1,
		"friends": ["everything"]	  //properties can be any data type
}

//Accessing object properties with  Dot Notation
var testObj = {
		"Pepe": 19,
		"Ozil": 11,
		"Tierney": 2
};
var PepeNum = testObj.Pepe;
var TierneyNum = testObj.Tierney;
console.log(testObj.Tierney);
//We can also use Dot Notation to update object properties
testObj.Ozil = 10;
console.log(testObj.Ozil); //This will change the value of Ozil from 11 to 10
testObj.Bellerin = 3;      //This will add new property to out object testObj
delete testObj.Bellerin;   //This will delete a property
//Accessing object properties with Bracket Notation
var testBracket = {
		"an entree": "hamburger", //Bracket Notation is used if the property has a space in it
		"my side": "veggies"
};
var entreeName = testBracket["an entree"];
console.log(testBracket["an entree"]);

//Checking if an object has a property
var myObj = {
		gift: "pony",
		pet: "kitten",
		bed: "sleig"
};
function checkObj(checkProp) {
	if(myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp]
	} else {
		return "Not Found";
	}
}
console.log(checkObj("pet"));

//Accessing Nested Objects
var myStorage = {
		car: {
			inside: {
				"glove box": "maps",
				"passanger seat": "iPod",
			},
			outside: {
				trunk: "jack",
			}
		}
    }
var glveBoxContents = myStorage.car.inside["glove box"];
console.log(glveBoxContents);

//Accessing Nested Arrays
var myPlants = [
	{
		type: "flowers",
		list: ["rose", "tulip", "lily"]
	},
	{
		type: "trees",
		list: ["fir", "pine", "birch"]
	}
];
var desiredTree = myPlants[1].list[1];
console.log(desiredTree);

//Record Collection
var collection = {
		"1479": {
			"album": "Metal Commando",
			"artist": "Primal Fear",
			"tracks": ["Halo", "My Name Is Fear"]
		},
		"6497": {
			"album": "Thulean Mysteries",
			"artist": "Burzum",
			"tracks": ["ForeBears", "The Great Sleep"]
		},
		"4568": {
			"artist": "Children of Bodom",
			"tracks": []
		},
		"8747": {
			"album": "Twilight of the Thunder Gods",
		}
};
var collectionCopy = JSON.parse(JSON.stringify(collection));  //This will keep the original copy of collection even after changes made

function updateRecords(id, prop, value) {
	if(value === "") {
		delete collection [id][prop];  //This will delete that property of any id which is left blank
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || []; 
		collection[id][prop].push(value);  //If collection doesn't already exist, it will create an empty array at the end
	} else {
		collection[id][prop] = value;
	}
	return collection;
}
updateRecords("6497", "tracks", "Heil Odin, Sirre");
console.log(updateRecords("8747", "artist", "Amon Amarth"));

