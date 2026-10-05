/*
    Valid Anagram
    👨‍💼 How the interviewer asks it: "Given two strings, determine whether one string is an anagram of the other."
    🔑 Keywords: anagram, characters, same letters, frequency
    🎯 Main problem: Do both strings contain exactly the same characters with the same frequencies?
    🧱 Data Structure: Hash map
*/

function isAnagram(s, t) {
	if (s.length !== t.length) return false;
	
	const count = new Map();
	
	for (const char of s) {
	    count.set(char, (count.get(char) || 0) + 1);
	}
	
	for (const char of t) {
	    if (!count.has(char)) {
		    return false;
	    }
	    
	    count.set(char, count.get(char) - 1);
	    
	    if (count.get(char) < 0) {
		    return false;
	    }
	}
	return true;
}

console.log(isAnagram('hello', 'olleh')); // Output: true