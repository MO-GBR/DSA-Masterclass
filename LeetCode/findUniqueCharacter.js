/*
    Find the unique character
    👨‍💼 How the interviewer asks it: "Given a string, find the first most unique character"
    🔑 Keywords: unique, character, same letters, frequency, non-repeat
    🎯 Main problem: Find the first non-repeating character in a string
    🧱 Data Structure: Hash map
	⏱️ Complexity: O(n)
*/

function findUnique(str) {
    // Handle empty string
    if(!str) return null;

    const frequency = new Map();

    // First pass: count occurrences of each character
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        const count = frequency.get(char) || 0;
        frequency.set(char, count + 1);
    };

    // Second pass: find the first character with count 1
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        const count = frequency.get(char);
        if(count === 1) return str[i];
    };

    return null; // No non-repeating character found
};

console.log(findUnique("swiss")); // Output: "w"