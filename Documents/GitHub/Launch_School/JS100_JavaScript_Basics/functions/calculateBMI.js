// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

let calculateBMI = (weight, height) => {
	let him = height/100;

	let bmi = weight/(him**2);

	return (bmi.toFixed(2))

}

console.log(calculateBMI(80, 180)); // "24.69"
