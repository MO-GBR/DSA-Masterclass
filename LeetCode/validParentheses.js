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

function isValidParentheses(str) {
    // Stack stores opening brackets
    const stack = [];

    // Map closing brackets to their matching opening brackets
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const char of str) {

        // If the character is an opening bracket, push it
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }

        // If the character is a closing bracket
        else if (char in pairs) {
            // Get the last opening bracket
            const last = stack.pop();

            // Check whether the brackets match
            if (last !== pairs[char]) return false;
        }
    }

    // Valid only if no unmatched opening brackets remain
    return stack.length === 0;
}

console.log(isValidParentheses('{[()]}'), isValidParentheses('[){(')); // Output: true, false