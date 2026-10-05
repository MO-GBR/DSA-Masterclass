/*
    Kth Largest Element
    👨‍💼 How the interviewer asks it: "Given an integer array, find the kth largest element."
    🔑 Keywords: kth, largest, smallest, top k
    🎯 Main problem: Find the Kth element from the largest side without necessarily sorting everything.
    ⚙️ Algorithm: Heap sort
    🧱 Data Structure: Heap Tree
    🧩 Pattern: 🔥 Top K / Heap
*/

function findKthLargest(numbers, k) {
    const minHeap = [];

    // Add a number to the heap
    function push(value) {
        minHeap.push(value);
        let index = minHeap.length - 1;

        // Bubble up
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (minHeap[parent] <= minHeap[index]) break;
            [minHeap[parent], minHeap[index]] = [minHeap[index], minHeap[parent]];
            index = parent;
        }
    }

    // Remove the smallest value
    function pop() {
        const min = minHeap[0];
        const last = minHeap.pop();
        if (minHeap.length > 0) {
            minHeap[0] = last;
            let index = 0;

            // Bubble down
            while (true) {
                let smallest = index;
                const left = 2 * index + 1;
                const right = 2 * index + 2;

                if (
                    left < minHeap.length &&
                    minHeap[left] < minHeap[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right < minHeap.length &&
                    minHeap[right] < minHeap[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === index) break;

                [minHeap[index], minHeap[smallest]] = [minHeap[smallest], minHeap[index]];
                index = smallest;
            }
        }

        return min;
    }

    for (const number of numbers) {
        push(number);

        // Keep only k elements
        if (minHeap.length > k) {
            pop();
        }
    }

    // Root of min heap = kth largest
    return minHeap[0];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5