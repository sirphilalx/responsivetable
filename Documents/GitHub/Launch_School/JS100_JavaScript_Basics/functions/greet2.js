// How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?

//Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:

function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
