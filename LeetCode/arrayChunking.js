/*
    Array Chunking
    👨‍💼 How the interviewer asks it: "Write a function that takes an array and a chunk size, and returns an array of arrays, where each sub-array has at most the specified number of elements."
    🔑 Keywords: Array, Chunking, Subarrays
    🎯 Main problem: Implement array chunking logic.
    🧱 Data Structure: Array
    🧩 Pattern: Iteration + Slicing
	⏱️ Complexity
		- Time: O(n)
		- Space: O(n)
*/

function arrayChunking(arr, chunkSize) {
    // Reject invalid chunk sizes
    if (!Number.isInteger(size) || size <= 0) {
        throw new Error("Chunk size must be a positive integer");
    };

    const result = [];

    // Move through the array by the specified chunk size
    for (let i = 0; i < arr.length; i += chunkSize) {
        // Extract elements from the current index up to size
        const chunk = arr.slice(i, i + chunkSize);
        // Add the chunk to the result
        result.push(chunk);
    }
    return result;
}

console.log(arrayChunking([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]