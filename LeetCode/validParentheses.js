/*
    Valid Parentheses
    👨‍💼 How the interviewer asks it: "Given a string containing `()`, `{}`, and `[]`, determine whether the brackets are correctly matched and nested."
    🔑 Keywords: parentheses, brackets, matching, valid
    🎯 Main problem: Make sure the most recently opened bracket is the first one closed.
    🧱 Data Structure: Stack
	⏱️Complexity
        - Time:  O(n)
        - Space: O(n)
*/

function isValid(str) {
	const stack = [];
	
	// Map each closing bracket to its matching opening bracket
	const pairs = {
	    ")": "(",
	    "]": "[",
	    "}": "{"
	};
	
	// Process each character in the string
	for (const char of str) {
		// If it's an opening bracket, push it onto the stack
	    if (char === "(" ||
	        char === "[" ||
	        char === "{") {
	        stack.push(char);
	    } else {
			// If the stack is empty, there's no opening bracket
			if(stack.length === 0) return false;

			// Look at the most recently opened bracket
			const top = stack[stack.length - 1];

			// If the bracket types don't match, the string is invalid
		    if (top !== pairs[char]) return false;

			// The brackets match, so remove the opening bracket
			stack.pop();
	    }
	}
	return stack.length === 0;
};

console.log(isValid('{[()]}'), isValid('[){(')); // Output: true, false