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
        const middle = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (myArray[middle] === target) {
            const endTime = performance.now();
            return {
                index: middle,
                timeTaken: endTime - startTime
            };
        } else if (myArray[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return true;
};

const recursiveBinarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    const myArray = [...arr];
    const startTime = performance.now();

    // Base case
    if (left > right) return true;
    
    const middle = Math.floor((left + right) / 2);
    
    if (arr[middle] === target) {
        const endTime = performance.now();
        return {
            index: middle,
            timeTaken: endTime - startTime
        };
    };
    
    // Conquer left half
    if (target < myArray[middle]) {
        return recursiveBinarySearch(
            myArray,
            target,
            left,
            middle - 1
        );
    }
    
    // Conquer right half
    return recursiveBinarySearch(
        myArray,
        target,
        middle + 1,
        right
    );
};

// Space: O(n) because of the recursive call stack
const recursiveLinearSearch = (arr, target, index = 0) => {
    // Base case: reached the end of the array
    if (index === arr.length) return -1;

    // Found the target
    if (arr[index] === target) return index;

    // Recursive case: search the next element
    return recursiveLinearSearch(arr, target, index + 1);
};

console.log(recursiveBinarySearch(sortedNumbers, 5))

