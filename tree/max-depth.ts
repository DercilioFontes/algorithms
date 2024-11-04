import { TreeNode } from "./tree-node";

const maxDepth = (node: TreeNode | null): number => {
  if (!node) {
    return 0;
  }

  const left = maxDepth(node.left);
  const right = maxDepth(node.right);
  return 1 + Math.max(left, right);
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(2);
root.right.right = new TreeNode(5);
root.right.right.right = new TreeNode(6);

const result = maxDepth(root);

console.log({ result });
