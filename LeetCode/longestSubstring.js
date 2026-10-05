/*
    Longest Substring Without Repeating Characters
    👨‍💼 How the interviewer asks it: "Given a string, find the length of the longest substring without repeating characters."
    🔑 Keywords: longest, substring, without repeating
    🎯 Main problem: Find the longest contiguous section that satisfies a condition.
    🧱 Data Structure: Set
    🧩 Pattern: 🔥 Sliding Window 👉 This is a HUGE interview pattern.
*/

function lengthOfLongestSubstring(s) {
	const set = new Set();
	
	let left = 0;
	let maxLength = 0;
	
	for (let right = 0; right < s.length; right++) {
	    while (set.has(s[right])) {
		    set.delete(s[left]);
		    left++;
	    }
	    
	    set.add(s[right]);
	    
	    maxLength = Math.max(
		    maxLength,
		    right - left + 1
	    );
	}
	
	return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcabcd')); // Output: 4