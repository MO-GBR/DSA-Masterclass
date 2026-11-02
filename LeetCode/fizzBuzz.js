/*
    Fizz Buzz
    👨‍💼 How the interviewer asks it: "Write a program that prints the numbers from 1 to n. But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'."
    🔑 Keywords: Fizz, Buzz, multiples
    🎯 Main problem: Implement the Fizz Buzz logic.
    🧱 Data Structure: Array
    🧩 Pattern: Iteration + Conditional Logic
	⏱️ Complexity
		- Time: O(n)
		- Space: O(1)
*/

function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        // Check divisibility by both 3 and 5 first
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }

        // Check divisibility by 3
        else if (i % 3 === 0) {
            result.push("Fizz");
        }

        // Check divisibility by 5
        else if (i % 5 === 0) {
            result.push("Buzz");
        }

        // Otherwise, keep the original number
        else {
            result.push(i.toString());
        }
    }
    return result;
};

console.log(fizzBuzz(15));
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]