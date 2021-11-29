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
}


let g = new Graph();
g.addVertex("Bangalore");
g.addVertex("Hyderabad");
g.addVertex("Chennai");

g.addEdge("Bangalore", "Hyderabad");
