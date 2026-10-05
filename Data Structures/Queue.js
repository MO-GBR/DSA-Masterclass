/*
    Queue Data Structure — FIFO (First In, First Out)
    - A queue is a linear data structure that follows the First In, First Out (FIFO) principle.
    - This means that the first element added to the queue will be the first one to be removed.
    - Queues are used in various applications such as task scheduling, breadth-first search, and buffering.
    - Example> Queue: [Front] 10 ← 20 ← 30 [Rear]
    - Complexity:
        - Enqueue (add an element): O(1)
        - Dequeue (remove an element): O(1)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // Initialize the front of the queue to null
        this.rear = null; // Initialize the rear of the queue to null
        this.length = 0; // Initialize the length of the queue to 0
    }

    // Method to add an element to the rear of the queue
    enqueue(data) {
        // Create a new node with the given data
        const newNode = new Node(data);

        // If the queue is empty, set both front and rear to the new node
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            // If the queue is not empty, add the new node to the rear and update the rear
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++; // Increment the length of the queue
        return this; // Return the queue for chaining
    }

    // Method to remove an element from the front of the queue
    dequeue() {
        // If the queue is empty, return null
        if (!this.front) return null;

        // If the queue has only one element, remove it and reset front and rear
        if (this.front === this.rear) {
            const removedNode = this.front; // Store the node to be removed
            this.front = null; // Reset front to null
            this.rear = null; // Reset rear to null
            this.length--; // Decrement the length of the queue
            return removedNode.data; // Return the data of the removed node
        }

        // If the queue has more than one element, remove the front node and update the front
        const removedNode = this.front; // Store the node to be removed
        this.front = this.front.next; // Update the front to the next node
        this.length--; // Decrement the length of the queue
        return removedNode.data; // Return the data of the removed node
    }
}