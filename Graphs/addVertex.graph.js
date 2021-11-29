class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v1){
        this.adjacencyList[v1] = [];ß
    }
}


let g = new Graph();
g.addVertex("Bangalore");
g.addVertex("Hyderabad");
g.addVertex("Chennai");