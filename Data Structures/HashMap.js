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
    #_hash(key) {
        let total = 0;
        const PRIME_NUMBER = 31;
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const value = char.charCodeAt(0);
            total = (total * PRIME_NUMBER + value) % this.keyMap.length;
        }
        return total;
    }

    // Method to insert or update a key-value pair in the hash map 
    set(key, value) {
        const index = this.#_hash(key); // Get the index for the key

        // Check if the key exist
        if (!this.keyMap[index]) {
            this.keyMap[index] = []; // Initialize the bucket if it doesn't exist
        }

        const bucket = this.keyMap[index];

        // Check whether the key already exists.
        for (let pair of bucket) {
            if(pair[0] === key) {
                pair[1] = value;
                return;
            };
        }

        this.keyMap[index].push([key, value]);
        return this;
    }

    // Method to Retrieve a value using its key.
    get(key) {
        const index = this.#_hash(key); // Get the index for the key
        const bucket = this.keyMap[index];

        // Return value only if key exist
	    if(!bucket) return undefined; 

        for(let pair of bucket){
            if(pair[0] === key) return pair[1]
	    };
        return undefined;
    }

    // Method to delete a value using key
    delete(key) {
        const index = this.#_hash(key); // Get the index for the key
        const bucket = this.keyMap[index];

        const pairIndex = bucket.findIndex(
            pair => pair[0] === key
        );

        if(pairIndex === -1) return false;

        bucket.splice(pairIndex, 1)
	    
        return true;
    }

    getEntries() {
	    // Container to store keys and values
	    const data = [];

	    // Loop through the map
	    for(let i = 0; i < this.keyMap.length; i++) {
            // Loop through each array inside the key-map
		    if(this.keyMap[i]) {
			    for(let j = 0; j < this.keyMap[i].length; j++) {
				    // Push the keys and values
                    const entry = [this.keyMap[i][j][0], this.keyMap[i][j][1]];
				    data.push(entry);
			    } 
		    }
	    };
        
	    return data;
    }

    size() {
        const map = this.getEntries();

        return map.length;
    }

    // HELPER: PRINT MAP
    print() {
        const map = this.getEntries();

        console.log(`Map(${map.length}) {`);
        for (let [key, value] of map) {
            console.log(`   ${key} => ${value}`);
        };
        console.log('}');
    }
};