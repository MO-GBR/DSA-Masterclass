/*
    Reverse Number
    👨‍💼 How the interviewer asks it: "Reverse the digits of an integer"
    🔑 Keywords: reverse, number, math
    🎯 Main problem: Reverse the order of digits in an integer.
    ⚙️ Algorithm:
        1. Initialize a variable to hold the reversed number.
        2. While the original number is not zero:
            a. Extract the last digit using modulo operation.
            b. Append the digit to the reversed number.
            c. Remove the last digit from the original number by integer division.
	⏱️Complexity
        - Time:  O(n) => n is the number of digits in the integer
        - Space: O(1) => Constant space used for the reversed number
*/

function reverseNumber(num) {
    // Preserve the original sign
    const sign = Math.sign(num);

    // Work with the absolute value
    num = Math.abs(num);

    // Initialize the reversed number
    let reversed = 0;

    // Loop until the number becomes zero
    while (num !== 0) {
        // Extract the last digit
        let digit = num % 10;
        // Append the digit to the reversed number
        reversed = reversed * 10 + digit;
        // Remove the last digit from the original number
        num = Math.floor(num / 10);
    };

    // Return the reversed number with the original sign
    return reversed * sign;
};

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-456)); // -654