/*
    Valid Parentheses
    👨‍💼 How the interviewer asks it: "Given a string containing `()`, `{}`, and `[]`, determine whether the brackets are correctly matched and nested."
    🔑 Keywords: parentheses, brackets, matching, valid
    🎯 Main problem: Make sure the most recently opened bracket is the first one closed.
    🧱 Data Structure: Stack
*/

function isValid(s) {
	const stack = [];
	
	const pairs = {
	    ")": "(",
	    "]": "[",
	    "}": "{"
	};
	
	for (const char of s) {
	    if (char === "(" ||
	        char === "[" ||
	        char === "{") {
	        stack.push(char);
	    } else {
		    if (stack.pop() !== pairs[char]) return false;
	    }
	}
	return stack.length === 0;
};

console.log(isValid('{[()]}'), isValid('[){(')); // Output: true, false