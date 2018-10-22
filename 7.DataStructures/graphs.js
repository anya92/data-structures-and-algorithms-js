class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        let adjacenctVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacenctVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
}

let graph = new Graph();
graph.addVertex('Berlin');
graph.addVertex('Denver');
graph.addVertex('Oslo');
graph.addVertex('Helsinki');
graph.addEdge('Oslo', 'Helsinki');
graph.addEdge('Oslo', 'Denver');
graph.addEdge('Oslo', 'Berlin');
graph.addEdge('Denver', 'Berlin');
graph.removeEdge('Berlin', 'Oslo');
console.log(graph);
graph.removeVertex('Oslo');
console.log(graph);
