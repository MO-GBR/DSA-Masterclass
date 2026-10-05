/*
    Array Data Structure — A contiguous block of memory with indexed access.
    Complexity:
    - Access / Search / Push / Pop: O(1)
    - Insert / Delete / Shift / Unshift: O(n)
    Example:
    - Index:  0   1   2   3
    - Value: [10, 20, 30, 40]
*/

class myArray {
    constructor() {
        this.length = 0; // Initialize the length of the array
        this.data = {}; // We use an object to store the array elements
    }

    // Method to get the value at a specific index
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        return this.data[index];
    }

    // Method to add a value at the end of the array
    push(value) {
        this.data[this.length] = value; // Assign the value to the next index
        this.length++; // Increment the length of the array
        return this.length; // Return the new length of the array
    }

    // Method to remove the last value from the array
    pop() {
        if (this.length === 0) {
            throw new Error('Array is empty');
        }
        const lastValue = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastValue;
    }

    // Method to insert a value at a specific index
    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }

        // Shift elements to the right to make space for the new value
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = value;
        this.length++;
        return this.length;
    }

    // Method to add a value at the beginning of the array
    unshift(value) {
        // Shift elements to the right to make space for the new value
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = value;
        this.length++;
        return this.length;
    }

    // Method to remove the first value from the array
    shift() {
        if (this.length === 0) {
            throw new Error('Array is empty');
        }
        const firstValue = this.data[0];
        delete this.data[0];
        this.length--;
        return firstValue;
    }

    // Method to delete a value at a specific index
    delete(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        const deletedValue = this.data[index];
        delete this.data[index];
        this.length--;
        return deletedValue;
    }

    // Method to get the current length of the array
    size() {
        return this.length;
    }

    // Method to get the entire array as a standard JavaScript array
    toArray() {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.data[i]);
        }
        return result;
    }
};