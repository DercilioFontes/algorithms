class GraphNode {
  value: any;
  neighbors: GraphNode[];

  constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node: GraphNode) {
    this.neighbors.push(node);
  }
}

class Graph {
  nodes: GraphNode[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any) {
    this.nodes.push(new GraphNode(value));
  }

  addEdge(source: GraphNode, destination: GraphNode) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

const bfs = (startNode: GraphNode) => {
  const visited: Set<GraphNode> = new Set();
  const queue: GraphNode[] = [];

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

const dfs = (startNode: GraphNode) => {
  const visited: Set<GraphNode> = new Set();
  const stack: GraphNode[] = [];

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

const shortestPath = (graph: Graph, start: GraphNode, target: GraphNode) => {
  const visited: Set<GraphNode> = new Set();
  const queue: [GraphNode, GraphNode[]][] = [];

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
