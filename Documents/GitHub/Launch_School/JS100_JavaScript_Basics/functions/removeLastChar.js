// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

let removeLastChar = (char) => {
	console.log(char.substring(0, char.length -1))
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
