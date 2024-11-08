import { TreeNode } from "../tree-node";

const rightSideView = (root: TreeNode<number> | null): number[] => {
  if (!root) return [];
  let queue = [root];
  const ans: number[] = [];

  while (queue.length) {
    const nextQueue = [];
    ans.push(queue.at(-1)!.val);

    for (const node of queue) {
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

  return ans;
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.right = new TreeNode(6);
root.right = new TreeNode(2);
root.right.right = new TreeNode(5);

const result = rightSideView(root);
console.log({ result });
