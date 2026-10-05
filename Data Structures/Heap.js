/*
    Heap Tree — A special type of binary tree that is mainly used when we repeatedly need to access the minimum or maximum element quickly.
    - A heap is a complete binary tree that satisfies the heap property.
    - In a Min Heap, every parent is smaller than or equal to its children → smallest element is always at the top → Parent ≤ Children
    - In a Max Heap, every parent is greater than or equal to its children → largest element is always at the top → Parent ≥ Children
    - Complexity
        - Get peek / Search: O(n)
        - Insert / Remove: O(log n)
        - Space: O(n)
*/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Method to insert value in the heap
    insert(value) {
        this.heap.push(value);
        this.#_bubbleUp();
    }

    #_bubbleUp() {
        // Start at the last element.
        let index = this.heap.length - 1;

        while (index > 0) {
            // Find the parent index.
            const parentIndex = Math.floor((index - 1) / 2);

            // If the parent is already greater than or equal to the current value, the heap property is correct.
            // This is where the heap rule: Max(parent >= child) to turn this into a min heap use (this.heap[parentIndex] <= this.heap[index]) instead.
            if (this.heap[parentIndex] >= this.heap[index]) break;

            // Otherwise, swap parent and child.
            [
                this.heap[parentIndex],
                this.heap[index]
            ] = [
                this.heap[index],
                this.heap[parentIndex],
            ];

            // Continue from the parent's position.
            index = parentIndex;
        }
    }

    // Method to remove value from the heap
    remove() {
        // If the heap is empty, there is nothing to remove.
        if (this.heap.length === 0) return null;

        // If there is only one element, remove and return it.
        if (this.heap.length === 1) return this.heap.pop();

        // The root is the maximum value in a Max Heap.
        const removedValue = this.heap[0];

        // Move the last element to the root.
        this.heap[0] = this.heap.pop();

        // The new root may violate the heap property, so move it downward.
        this.#_bubbleDown();

        return removedValue;
    }

    #_bubbleDown() {
        let index = 0;
        while (true) {
            // Calculate the indexes of the children.
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;

            // Assume the current node is the largest.
            let largestIndex = index;

            // Check if the left child is larger.
            if (
                leftChildIndex < this.heap.length &&
                // This is where the heap rule: Max(parent >= child) to turn this into a min heap use (<) instead of (>).
                this.heap[leftChildIndex] > this.heap[largestIndex]
            ) {
                largestIndex = leftChildIndex;
            }

            // Check if the right child is larger.
            if (
                rightChildIndex < this.heap.length &&
                // This is where the heap rule: Max(parent >= child) to turn this into a min heap use (<) instead of (>).
                this.heap[rightChildIndex] > this.heap[largestIndex]
            ) {
                largestIndex = rightChildIndex;
            }

            // If the current node is already the largest, the heap property is restored.
            if (largestIndex === index) break;

            // Swap the current node with the larger child.
            [
                this.heap[index],
                this.heap[largestIndex]
            ] = [
                this.heap[largestIndex],
                this.heap[index],
            ];

            // Continue from the child's position.
            index = largestIndex;
        }
    }

    // Method to check if a value exists
    includes(value) {
        return this.heap.includes(value);
    }

    // Method to get the largest or the smallest value
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Method to get the size of a heap
    size() {
        return this.heap.length;
    }

    // Method to check if heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
};