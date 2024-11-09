import { TreeNode } from "../tree-node";

const rangeSum = (
  root: TreeNode<number> | null,
  low: number,
  high: number
): number => {
  if (!root) return 0;
  let sum = 0;

  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  if (root.val > low) {
    sum += rangeSum(root.left, low, high);
  }

  if (root.val < high) {
    sum += rangeSum(root.right, low, high);
  }

  return sum;
};

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right = new TreeNode(15);
root.right.right = new TreeNode(18);

const result = rangeSum(root, 7, 15);

console.log({ result });
