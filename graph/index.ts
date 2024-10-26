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
