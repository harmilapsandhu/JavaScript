//Conditional logic using if statements and Boolean 
function trueOrFalse(wasThatTrue) {
	if(wasThatTrue) {
		return "Yes, that was True";
	}
	return "No, that was not True";
}
console.log(trueOrFalse(false));

//Comparison with the Equality operator
function testEqualVal(val) {
	if(val == 12) {  //we use == operator for equal to (= is an assign operator)
		return "It is equal to 12";
	}
	return "It is not equal to 12"		
}
console.log(testEqualVal(12));

//Comparison with a strict equality operator (===)
//In the above example using ==, a string can be converted to a number so 12=="12" is still true
//But in strict equality operator, 12==="12" will not be true as it does not convert string to number, so only 12===12 will be true

//Inequality operator is an opposite of equality operator denoted by != (It can do a type conversion from number to string)
//Strict Inequality operator is denoted by !== (It does not do type conversion)

//Greater than and equal to operator
function greaterOrEqual(val) {
	if(val >= 20) {
		return "Number is greater than or equal to 20";
	}
	if(val >= 10) {
		return "Number is greater than equal to 10";
	}	
	return "Number is less than 10";
}
console.log(greaterOrEqual(5));

//Logical And Operator (&&)
function logicalAnd(val) {  
	if(val >= 25 && val <= 50) {  
		return "Yes";
	}
	return "No";
}
console.log(logicalAnd(40));

//Logical Or Operator (||)
function logicalOr(val) {
	if(val < 10 || val > 20) {
		return "Outside";
	}
	return "Inside";
}
console.log(logicalOr(12));

//Else Statements
function testElse(val) {
	var result = "";
	
	if(val > 5) {
		result = "Greater than 5";
	} else {
		result = "Less than 5";
}
	return result;
}	
console.log(testElse(3));

//Else-if to chain multiple if statements together. It is important to check the order of if statements to get the desired output

//Switch Statements (Can be used instead of else if statements)
function caseSwitch(val) {
	var answer = "";
	switch(val) {
	case 1:
		answer = "alpha";
		break;
	case 2:
		answer = "beta";
		break;
	case 3:
		answer = "gamma";
		break;
	case 4:
		answer = "delta";
		break;
	default:  //This is a default option in a switch statement and can be used like an else in an if-else statement
		answer = "Something Else";
		break;
	}
	return answer;
}
console.log(caseSwitch(5));

//If multiple switch statements have the same value (we use 1 break statement for them)
function multipleSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
		case 2:
		case 3:
			answer = "low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "high";
			break;	
	}
	return answer;
}
console.log(multipleSwitch(3));

//Counting Cards - doesn't work properly
function cc(card) {
	count = 1;
	switch(card) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
		count++;
		break;
	case 10:
	case "J":
	case "Q":
	case "K":
	case "A":
		count--;
		break;
	}
	var holdBet = "Hold";
	if(count > 0) {
		holdBet = "Bet";
	}
	return count + " " + holdBet;
}
cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4));