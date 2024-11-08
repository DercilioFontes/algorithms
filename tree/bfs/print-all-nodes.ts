import { TreeNode } from "../tree-node";

const printAllNodes = (root: TreeNode | null) => {
  let queue = [root];

  while (queue.length) {
    const nextQueue = [];

    for (const node of queue) {
      // do some logic here on the current node
      console.log(node?.val);

      // put the next level onto the queue
      if (node?.left) {
        nextQueue.push(node.left);
      }
      if (node?.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.right = new TreeNode(6);
root.right = new TreeNode(2);
root.right.right = new TreeNode(5);

printAllNodes(root);
