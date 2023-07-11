//Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

// What will the following statements return?

typeof tweet;		// => String
typeof words;		// => Object (Array)
typeof isValid;		// => Boolean

console.log(tweet);
console.log(words);
console.log(isValid);
