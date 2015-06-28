var whichIsBigger = function(number1, number2) {
	if(number1 > number2) {
		console.log(number1 + " is greater than " + number2);
	} else if (number2 > number1) {
		console.log((number2 + " is greater than " + number1);
	} else {
		console.log(number1 + " and " + number2 + " are equal.");
	}
}

whichIsBigger(2,3);