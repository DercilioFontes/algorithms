import { TreeNode } from "./tree-node";

const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (!root) return null;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, q, p);
  const right = lowestCommonAncestor(root.right, q, p);

  if (left && right) return root;
  if (left) return left;
  return right;
};

const root = new TreeNode(3);
const _5 = new TreeNode(5);
root.left = _5;
const _6 = new TreeNode(6);
root.left.left = _6;
const _2 = new TreeNode(2);
root.left.right = _2;
const _7 = new TreeNode(7);
root.left.right.left = _7;
const _4 = new TreeNode(4);
root.left.right.right = _4;
const _1 = new TreeNode(1);
root.right = _1;
const _0 = new TreeNode(0);
root.right.left = _0;
const _8 = new TreeNode(8);
root.right.right = _8;

const result1 = lowestCommonAncestor(root, _6, _2);
const result2 = lowestCommonAncestor(root, _1, _8);
const result3 = lowestCommonAncestor(root, _7, _0);

console.log({ result1, result2, result3 });
