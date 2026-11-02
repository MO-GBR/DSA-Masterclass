/*
    Reverse String
    👨‍💼 How the interviewer asks it: "Reverse a given string, turn 'Hello', into 'olleH'"
    🔑 Keywords: reverse, string, two pointers
    🎯 Main problem: Reverse the order of characters in a string.
    🧩 Pattern: Two Pointers
	⏱️Complexity
        - Time:  O(n) => Visit half the array
        - Space: O(n) => Create an array from the string
*/

function reverseString(str) {
    // Convert the string into an array because strings are immutable
    const chars = str.split("");

    // Initialize two pointers
    let left = 0;
    let right = chars.length - 1;

    // Continue until the pointers meet
    while (left < right) {
        // Swap the characters at both positions
        [chars[left], chars[right]] = [chars[right], chars[left]];

        // Move pointers toward the center
        left++;
        right--;
    }

    // Convert the array back into a string
    return chars.join("");
}

console.log(reverseString("hello")); // "olleh"