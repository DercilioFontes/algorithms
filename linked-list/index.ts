class SinglyNode {
  val: any;
  next: SinglyNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }

  addNode = (prevNode: SinglyNode, nodeToAdd: SinglyNode) => {
    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd;
  };

  deleteNode = (prevNode: SinglyNode) => {
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  };
}

const one = new SinglyNode(1);
const two = new SinglyNode(2);
const three = new SinglyNode(3);
one.next = two;
two.next = three;
const head = one;

console.log(head.val);
console.log(head.next?.val);
console.log(head.next?.next?.val);

class DoublyNode {
  val: any;
  next: DoublyNode | null;
  prev: DoublyNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }

  addNode = (node: DoublyNode, nodeToAdd: DoublyNode) => {
    const prevNode = node.prev;
    nodeToAdd.next = node;
    nodeToAdd.prev = prevNode;
    if (prevNode?.next) prevNode.next = nodeToAdd;
    node.prev = nodeToAdd;
  };

  deleteNode = (node: DoublyNode) => {
    const prevNode = node.prev;
    const nextNode = node.next;
    if (prevNode?.next) prevNode.next = nextNode;
    if (nextNode?.prev) nextNode.prev = prevNode;
  };

  addToEnd = (nodeToAdd: DoublyNode) => {
    nodeToAdd.next = tail;
    nodeToAdd.prev = tail.prev;
    if (tail.prev) tail.prev.next = nodeToAdd;
    tail.prev = nodeToAdd;
  };

  removeFromEnd = () => {
    if (head2.next == tail) {
      return;
    }

    const nodeToRemove = tail.prev;
    if (nodeToRemove?.prev) nodeToRemove.prev.next = tail;
    if (nodeToRemove?.prev) tail.prev = nodeToRemove.prev;
  };

  addToStart = (nodeToAdd: DoublyNode) => {
    nodeToAdd.prev = head2;
    nodeToAdd.next = head2.next;
    if (head2.next) head2.next.prev = nodeToAdd;
    head2.next = nodeToAdd;
  };

  removeFromStart = () => {
    if (head2.next == tail) {
      return;
    }

    const nodeToRemove = head2.next;
    if (nodeToRemove?.next) nodeToRemove.next.prev = head2;
    if (nodeToRemove?.next) head2.next = nodeToRemove.next;
  };
}

const head2 = new DoublyNode(-1);
const tail = new DoublyNode(-1);
head2.next = tail;
if (tail.prev) tail.prev = head2;
