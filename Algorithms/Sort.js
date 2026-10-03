const numbers = [2, 3, 5, 4, 6, 10, 8, 1, 7, 9];

const merge = (left, right) => {
    // Create an empty array to hold the merged result
    const merged = [];
    // Initialize pointers for the left and right arrays
    let i = 0;
    let j = 0;

    // Compare elements from the left and right arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        // Compare the current elements from both arrays
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }
    
    // Add any remaining elements from the left array
    return merged.concat(left.slice(i), right.slice(j));
};

// Merge sort
const mergeSort = (arr) => {
    const myArray = [...arr];
    if (myArray.length <= 1) return myArray;

    // Split the array into two halves
    const mid = Math.floor(myArray.length / 2);
    const left = myArray.slice(0, mid);
    const right = myArray.slice(mid);

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
};

// Quick sort
const quickSort = (arr) => {
    const myArray = [...arr];
    if (myArray.length <= 1) return myArray;

    // Choose a pivot element (last element in this case)
    const pivot = myArray[myArray.length - 1];
    const left = []; // Array to hold elements less than the pivot
    const right = []; // Array to hold elements greater than the pivot

    // Loop through all indexes except the last one (pivot) and partition the array into left and right
    for(let i = 0; i < myArray.length - 1; i++) {
        // Compare each element with the pivot and place it in the appropriate array
        if(myArray[i] < pivot) {
            left.push(myArray[i]);
        } else {
            right.push(myArray[i]);
        }
    }

    // Recursively sort the left and right arrays and concatenate them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Insertion sort
const insertionSort = (arr) => {
    const myArray = [...arr];
    if (myArray.length <= 1) return myArray;

    // Loop through the array starting from the second element
    for (let i = 1; i < myArray.length; i++) {
        // Store the current element to be compared
        const current = myArray[i];
        // Initialize a pointer for the previous element
        let j = i - 1;
        // Move elements that are greater than the current element to one position ahead of their current position
        while (j >= 0 && myArray[j] > current) {
            myArray[j + 1] = myArray[j];
            j--;
        }
        // Place the current element in its correct position
        myArray[j + 1] = current;
    }
    return myArray;
}

// Bubble sort
const bubbleSort = (arr) => {
    const myArray = [...arr];
    if (myArray.length <= 1) return myArray;

    // Loop through the array multiple times
    for (let i = 0; i < myArray.length; i++) {
        // Compare adjacent elements and swap them if they are in the wrong order
        for (let j = 0; j < myArray.length - i - 1; j++) {
            if (myArray[j] > myArray[j + 1]) {
                // Swap the element
                const temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
        }
    }
    return myArray;
}

// Selection sort
const selectionSort = (arr) => {
    const myArray = [...arr];
    if (myArray.length <= 1) return myArray;

    // Loop through the array
    for (let i = 0; i < myArray.length - 1; i++) {
        // Find the minimum element in the remaining unsorted array
        let minIndex = i;
        for (let j = i + 1; j < myArray.length; j++) {
            if (myArray[j] < myArray[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            const temp = myArray[i];
            myArray[i] = myArray[minIndex];
            myArray[minIndex] = temp;
        }
    }
    return myArray;
};