// In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

'8' == 8;	// => returns true
'8' === 8;	// => returns false

the double equal sign does coercion. it is not strict and so, it converts the string to a number and then compares it with the number on the right, But the tripple equal sign checks for the equality of even the type of the operand. If the type of the operand is not the same, it does not convert
