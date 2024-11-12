class GraphNode<T> {
  value: T;
  neighbors: GraphNode<T>[];

  constructor(value: T) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node: GraphNode<T>) {
    this.neighbors.push(node);
  }
}

class Graph<T> {
  nodes: GraphNode<T>[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: T) {
    this.nodes.push(new GraphNode(value));
  }

  addEdge(source: GraphNode<T>, destination: GraphNode<T>) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

const bfs = <T>(startNode: GraphNode<T>) => {
  const visited: Set<GraphNode<T>> = new Set();
  const queue: GraphNode<T>[] = [];

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    console.log(currentNode.value);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

const dfs = <T>(startNode: GraphNode<T>) => {
  const visited: Set<GraphNode<T>> = new Set();
  const stack: GraphNode<T>[] = [];

  stack.push(startNode);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;

    if (!visited.has(currentNode)) {
      console.log(currentNode.value);
      visited.add(currentNode);
      stack.push(...currentNode.neighbors);
    }
  }
};

// Given a graph, find the shortest path between two nodes using BFS.

const shortestPath = <T>(graph: Graph<T>, start: GraphNode<T>, target: GraphNode<T>) => {
  const visited: Set<GraphNode<T>> = new Set();
  const queue: [GraphNode<T>, GraphNode<T>[]][] = [];

  queue.push([start, [start]]);

  while (queue.length > 0) {
    const [currentNode, currentPath] = queue.shift()!;

    if (currentNode === target) {
      return currentPath;
    }

    visited.add(currentNode);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...currentPath, neighbor]]);
      }
    }

    return null;
  }
};
