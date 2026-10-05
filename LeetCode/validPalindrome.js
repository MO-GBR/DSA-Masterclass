/*
    Valid Palindrome
    👨‍💼 How the interviewer asks it: "Given a string, determine whether it reads the same forward and backward."
    🔑 Keywords: palindrome, forward, backward, same
    🎯 Main problem: Compare the beginning and end while moving toward the middle.
    🧩 Pattern: Two Pointers 👉 We're comparing characters from opposite ends.
*/

function isPalindrome(s) {
	let left = 0;
	let right = s.length - 1;
	
	while (left < right) {
	    if (s[left] !== s[right]) {
		    return false;
	    }
	    
	    left++;
	    right--;
	}
	
	return true;
}

console.log(isPalindrome('reeacaeer')); // Output: true