/*
    Valid Palindrome
    👨‍💼 How the interviewer asks it: "Given a string, determine whether it reads the same forward and backward."
    🔑 Keywords: palindrome, forward, backward, same
    🎯 Main problem: Compare the beginning and end while moving toward the middle.
    🧩 Pattern: Two Pointers 👉 We're comparing characters from opposite ends.
	⏱️Complexity
        - Time:  O(n)
        - Space: O(1)
*/

function isPalindrome(s) {
	// Point at the first and last character in the string
	let left = 0;
	let right = s.length - 1;

	// Continue while the pointers haven't met
	while (left < right) {
		// If the first and last characters in the string doesn't match return false
	    if (s[left] !== s[right]) return false;
	    
		// If the first and last characters in the string match move the pointers close to each other
	    left++;
	    right--;
	}
	
	return true;
}

console.log(isPalindrome('reeacaeer')); // Output: true