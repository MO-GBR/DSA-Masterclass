/*
    Hash Map — Store key-value pairs and provide fast access to values based on their keys.
    - A hash map is a data structure that implements an associative array abstract data type, a structure that can map keys to values.
    - It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
    - Example> Hash Map: { "name": "Alice", "age": 30, "city": "New York" }
    - Complexity:
        - Average case: O(1) for insert, delete, and search operations
        - Worst case: O(n) for insert, delete, and search operations (when many keys hash to the same index)
*/

class HashMap {
    constructor(size = 53) {
        this.keyMap = new Array(size); // Initialize the key map with a specified size
    }

    // Hash function to convert a key into an index
    _hash(key) {
        let total = 0;
        const PRIME_NUMBER = 31;
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const value = char.charCodeAt(0);
            total = (total * PRIME_NUMBER + value) % this.keyMap.length;
        }
        return total;
    }

    // Method to set a key-value pair in the hash map
    set(key, value) {
        const index = this._hash(key); // Get the index for the key
        // Check if the key exist
        if (!this.keyMap[index]) {
            this.keyMap[index] = []; // Initialize the bucket if it doesn't exist
        }
        this.keyMap[index].push([key, value]);
        return this;
    }

    // Method to Access a value using key
    get(key) {
        const index = this.hashFunction(key); // Get the index for the key
        // Return value only if key exist
	    if(this.keyMap[index]) {
            // Find the key
	        for(let i = 0; i < this.keyMap[index].length; i++) { // 2
		        if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]; // 3
	        }
	    };
        return false;
    }

    getAll(type) {
	    // Containers to store keys and values
	    const keys = [];
	    const values = [];

	    // Loop through the map
	    for(let i = 0; i < this.keyMap.length; i++) {
            // Loop through each array inside the key-map
		    if(this.keyMap[i]) {
			    for(let j = 0; j < this.keyMap[i].length; j++) { // 2-2
				    // Push the keys and values
				    if(type === 'keys') keys.push(this.keyMap[i][j][0]);
				    if(type === 'values') values.push(this.keyMap[i][j][1]);
			    } 
		    }
	    };
        
	    if(type === 'keys') return keys;
	    if(type === 'values') return values;
    }
}