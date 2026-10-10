/*
    Graph Data Structure — A Graph is a data structure used to represent relationships or connections between objects.
    - A graph consists of:
        - Vertices (Nodes) → the objects/entities.
        - Edges → the connections between those objects.
    - Example:
        Vertices = A, B, C, D
        Edges = A-B, A-C, B-D, C-D
         __________________
        |                  |
        |   A---Edge---B   |
        |   |          |   |
        |  Edge      Edge  |
        |   |          |   |
        |   C---Edge---D   |
        |__________________|

    - Time & Space Complexity:
        - Add vertex, Add edge, remove edge: O(1)
        - Remove vertex: O(v)
        - Space: O(1)
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Method to add vertex
    addVertex(vertex) {
        // Only add the vertex if it doesn't already exist.
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        // If the vertex is already in the graph
        return false;
    }

    // Method to remove vertex
    removeVertex(vertex) {
        // If the vertex doesn't exist, there's nothing to remove.
	    if(!this.adjacencyList[vertex]) return null;

        // Remove this vertex from every other vertex's neighbors (v).
	    for(let v of this.adjacencyList[vertex]) {
            this.adjacencyList[v] = this.adjacencyList[v].filter(x => x !== vertex);
        };

	    delete this.adjacencyList[vertex];
        return this;
    }

    // Method to add edge
    addEdge(vertex1, vertex2) {
        // Make sure both vertices exist.
        this.addVertex(vertex1);
        this.addVertex(vertex2);

        // Create the new edge by pushing vertices
        this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);

	    return this;
    }

    // Method to remove edge
    removeEdge(vertex1, vertex2) {
        // If either vertex doesn't exist, there's no edge to remove.
	    if(!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) return;

        // Remove the connection in BOTH directions
		this.adjacencyList[vertex1] = this.adjacencyList[vertex2].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        
        return this;
    }

    // HELPER: PRINT GRAPH
    print() {
        console.log('Graph:');
        let j = 1;
        for (let i in this.adjacencyList) {
            console.log(`${j}. Vertex(${i}) => Edge(${[...this.adjacencyList[i]].join(" — ")})`);
            j++;
        }
    }
};

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('C', 'D');
g.addEdge('B', 'D');

g.print();