/*
    Sentence Capitalization
    👨‍💼 How the interviewer asks it: "Capitalize the first letter of every word in a given sentence."
    🔑 Keywords: capitalize, sentence, string
    🎯 Main problem: Capitalize the first letter of each word in a sentence.
    🧱 Data Structure: Array
    🧩 Pattern: Iteration + String Manipulation
	⏱️ Complexity
		- Time: O(n)
		- Space: O(n)
*/

function capitalizeSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");

    // Iterate through each word and capitalize the first letter
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a sentence
    return words.join(" ");
};

console.log(
    capitalizeSentence("hello world from javascript")
);

// "Hello World From Javascript"