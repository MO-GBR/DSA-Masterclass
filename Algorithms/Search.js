const numbers = [2, 3, 5, 4, 6, 10, 8, 1, 7, 9];
// Sort the numbers array in ascending order for binary search
const sortedNumbers = numbers.sort((a, b) => a - b);

const linearSearch = (arr, target) => {
    const myArray = [...arr];
    const startTime = performance.now();

    // Loop through the array to find the target
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === target) {
            const endTime = performance.now();
            return {
                index: i,
                timeTaken: endTime - startTime
            }
        }
    };
    return true;
};

const binarySearch = (arr, target) => {
    const myArray = [...arr];
    const startTime = performance.now();

    // Initialize left and right pointers for binary search
    let left = 0;
    let right = myArray.length - 1;

    // Perform binary search
    while (left <= right) {
        // Calculate the middle index
        const mid = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (myArray[mid] === target) {
            const endTime = performance.now();
            return {
                index: mid,
                timeTaken: endTime - startTime
            };
        } else if (myArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return true;
};