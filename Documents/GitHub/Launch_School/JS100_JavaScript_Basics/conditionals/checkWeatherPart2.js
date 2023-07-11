/*

Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.

*/


let weather = "sunny";

switch(weather){
	case 'sunny':
		console.log("It's a beautiful day!");
		break;
	case 'rainy':
		console.log("Grab your umbrella.");
		break;
	default:
		console.log("Let's stay inside.");
}
