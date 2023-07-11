// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.


// CODE 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// CODE 2
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/*

Both statements execute the given block as long as the condition evaluates to true. The difference is that the condition in a while statement is checked before executing the block, while the condition in a do...while statement is checked after the block has been executed. So the block in a do...while statement will always be executed at least once, even if the condition is not satisfied.

Therefore the second code snippet logs 'Woooot!' once, while the first code snippet does not log anything.

*/
