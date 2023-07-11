// Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

 

let compareByLength = (a, b) => {
	if (a.length < b.length)
		return (-1);
	else if (b.length < a.length)
		return (1);
	else
		return (0);
}

console.log(compareByLength('patience', 'perseverance'));
