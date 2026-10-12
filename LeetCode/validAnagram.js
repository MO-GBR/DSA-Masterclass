/*
    Valid Anagram
    👨‍💼 How the interviewer asks it: "Given two strings, determine whether one string is an anagram of the other."
    🔑 Keywords: anagram, characters, same letters, frequency
    🎯 Main problem: Do both strings contain exactly the same characters with the same frequencies?
    🧱 Data Structure: Hash map
	⏱️ Complexity: O(n)
*/

function isAnagram(s, t) {
	// Anagrams must have the same length
	if (s.length !== t.length) return false;
	
	// Store character frequencies from s
	const frequency  = new Map();
	
	for (const char of s) {
		// Get the current count, or 0 if the character is new
		const count = frequency.get(char) || 0;

		// Increase this character's count
	    frequency.set(char, count + 1);
	};
	
	for (const char of t) {
		const count = frequency.get(char);

		// If the character doesn't exist, or its count is 0
        // 0 Means t contains a character we cannot match
	    if (!frequency.has(char) || count <= 0) return false;

		// Use one occurrence of this character
	    frequency.set(char, count - 1);
	};

	// Every character was matched successfully
	return true;
}

// Examples
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("aab", "abb"));       // false
console.log(isAnagram("anagram", "nagaram")); // true