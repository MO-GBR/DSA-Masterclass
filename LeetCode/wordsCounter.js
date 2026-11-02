/*
    Words Counter
    👨‍💼 How the interviewer asks it: "Write a function that takes a string and returns the number of words in it."
    🔑 Keywords: String, Words, Counting
    🎯 Main problem: Implement word counting logic.
    🧱 Data Structure: Hash map + String
	⏱️ Complexity
		- Time: O(n)
		- Space: O(n)
*/
function wordsCounter(str) {
    // Handle edge cases
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }

    // Create a hash map to store word frequencies
    const wordCount = new Map();

    // Normalize the sentence and extract individual words
    const words = sentence
        .toLowerCase()
        .match(/\b[\p{L}\p{N}']+\b/gu) || [];

    // Traverse all words
    for (const word of words) {

        // If the word exists, increment its count
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        }

        // Otherwise, initialize its count to 1
        else {
            wordCount.set(word, 1);
        }
    }

    return Object.fromEntries(wordCount);
};

// Shorter version using a single line of code
const count = (str) => str.trim().split(/\s+/).filter(word => word.length > 0).length;

console.log(count("Hello, my dog is cute")); // 5

console.log(wordsCounter("Hello, my dog is cute")); // { hello: 1, my: 1, dog: 1, is: 1, cute: 1 }