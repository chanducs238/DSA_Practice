class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v1){
        this.adjacencyList[v1] = [];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
    }

    bfsIterative(start){
        const result = [];
        const visited = {};
        let queue = [start];
        let currentVertex;
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex); 
            this.adjacencyList[currentVertex].forEach(element => {
                if(!visited[element]){
                    visited[element] = true;
                    queue.push(element);
                }
            });
        }
        return result;
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
