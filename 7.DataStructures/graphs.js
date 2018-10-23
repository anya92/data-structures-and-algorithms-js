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

  depthFirstRecursive(start) {
    let results = [];
    let visited = {};
    const { adjacencyList } = this;

    (function traverse(vertex) {
      if (!vertex) return;
      results.push(vertex);
      visited[vertex] = true;
      for (let neighbour of adjacencyList[vertex]) {
        if (!visited[neighbour]) traverse(neighbour);
      }
    })(start);
    return results;
  }

  depthFirstIterative(start) {
    let stack = [];
    let results = [];
    let visited = {};
    stack.push(start);
    visited[start] = true;
    while (stack.length > 0) {
      let vertex = stack.pop();
      results.push(vertex);
      for (let neighbour of this.adjacencyList[vertex]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      }
    }
    return results;
  }

  breadthFirst(start) {
    let queue = [];
    let results = [];
    let visited = {};
    queue.push(start);
    visited[start] = true;
    while (queue.length) {
      let vertex = queue.shift();
      results.push(vertex);
      for (let neighbour of this.adjacencyList[vertex]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      }
    }
    return results;
  }
}

let g = new Graph();
g.addVertex('Berlin');
g.addVertex('Denver');
g.addVertex('Oslo');
g.addVertex('Helsinki');
g.addEdge('Oslo', 'Helsinki');
g.addEdge('Oslo', 'Denver');
g.addEdge('Oslo', 'Berlin');
g.addEdge('Denver', 'Berlin');
g.removeEdge('Berlin', 'Oslo');
console.log(g);
g.removeVertex('Oslo');

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.depthFirstRecursive('C'));
console.log(graph.depthFirstIterative('C'));
console.log(graph.breadthFirst('C'));
