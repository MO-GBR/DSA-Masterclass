/* 
    Doubly Linked List - A linear data structure where each element (node) contains references to both the next and previous nodes in the sequence.
    - Each node has three components: data, a pointer to the next node, and a pointer to the previous node.
    - The first node's previous pointer points to null, and the last node's next pointer points to null.
    - No indexing, so accessing elements requires traversal from the head or tail node.
    - Example: [10] ↔ [20] ↔ [30] ↔ null
*/

class Node {
    constructor(data) {
        this.data = data; // Store the data in the node
        this.next = null; // Initialize the next pointer to null
        this.prev = null; // Initialize the previous pointer to null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list to null
        this.tail = null; // Initialize the tail of the list to null
        this.length = 0; // Initialize the length of the list to 0
    }

    // Method to add a new node at the end of the list
    append(data) {
        // Create a new node with the given data
        const newNode = new Node(data);

        // If the list is empty, set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this; // Return the list for chaining
        }

        // If the list is not empty, add the new node at the end and update the tail
        this.tail.next = newNode; // Link the current tail to the new node
        newNode.prev = this.tail; // Link the new node back to the current tail
        this.tail = newNode; // Update the tail to the new node

        this.length++; // Increment the length of the list
        return this; // Return the list for chaining
    }

    // Method to remove a node from the end of the list
    remove() {
        if(!this.head) return null; // If the list is empty, return null

        // If the list has only one node, remove it and reset head and tail
        if(this.length === 1) {
            const removedNode = this.head; // Store the node to be removed
            this.head = null; // Reset head to null
            this.tail = null; // Reset tail to null
            this.length--; // Decrement the length of the list
            return removedNode; // Return the removed node
        }

        // If the list has more than one node, remove the tail node
        const removedNode = this.tail; // Store the node to be removed
        this.tail = removedNode.prev; // Update the tail to the previous node
        this.tail.next = null; // Set the new tail's next pointer to null
        removedNode.prev = null; // Disconnect the removed node's previous pointer
        this.length--; // Decrement the length of the list
        return removedNode; // Return the removed node
    }

    // Method to add a new node at the beginning of the list
    prepend(data) {
        // Create a new node with the given data
        const newNode = new Node(data);

        // If the list is empty, set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this; // Return the list for chaining
        }

        // If the list is not empty, add the new node at the beginning and update the head
        newNode.next = this.head; // Link the new node to the current head
        this.head.prev = newNode; // Link the current head back to the new node
        this.head = newNode; // Update the head to the new node

        this.length++; // Increment the length of the list
        return this; // Return the list for chaining
    }

    // Method to remove a node from the beginning of the list
    removeFirst() {
        if(!this.head) return null; // If the list is empty, return null

        // If the list has only one node, remove it and reset head and tail
        if(this.length === 1) {
            const removedNode = this.head; // Store the node to be removed
            this.head = null; // Reset head to null
            this.tail = null; // Reset tail to null
            this.length--; // Decrement the length of the list
            return removedNode; // Return the removed node
        }

        // If the list has more than one node, remove the head node
        const removedNode = this.head; // Store the node to be removed
        this.head = removedNode.next; // Update the head to the next node
        this.head.prev = null; // Set the new head's previous pointer to null
        removedNode.next = null; // Disconnect the removed node's next pointer
        this.length--; // Decrement the length of the list
        return removedNode; // Return the removed node
    }

    // Method to get the value at a specific index
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        let current;
        // Optimize the search by starting from the head or tail based on the index
        if (index < this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }
        return current.data; // Return the data of the found node
    }

    // Method to insert a value at a specific index
    insert(index, data) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        
        // If inserting at the beginning, use prepend
        if (index === 0) {
            this.prepend(data);
            return true;
        }

        // If inserting at the end, use append
        if (index === this.length) {
            this.append(data);
            return true;
        }

        // Create a new node with the given data
        const newNode = new Node(data);

        // Find the node at the specified index
        let current;
        if (index < this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }

        // Insert the new node before the found node
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;

        this.length++; // Increment the length of the list
        return true; // Return true to indicate successful insertion
    }

    // Method to remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        // If removing from the beginning, use shift
        if (index === 0) {
            return this.removeFirst();
        }

        // If removing from the end, use pop
        if (index === this.length - 1) {
            return this.remove();
        }

        // Find the node at the specified index
        let current;
        if (index < this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }

        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }
        // Remove the found node from the list
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
        this.length--; // Decrement the length of the list
        return current; // Return the removed node

    }

    // Method to get the current length of the list
    size() {
        return this.length; // Return the length of the list
    }
}