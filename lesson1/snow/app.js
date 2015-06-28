var rain = false;
var umbrella = false;
var snow = true;
var boots = false;
if (rain) {
	console.log("It is raining, take an umbrella.");
	var umbrella = true;
} else if (snow) {
	console.log("It is snowing. Better grab your boots!");
	var boots = true;
} else {
	console.log("It isn't raining or snowing.");
};