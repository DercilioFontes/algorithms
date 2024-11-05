/**
 * Given the root of a binary tree, find the number of nodes that are good.
 * A node is good if the path between the root and the node has no nodes with a greater value.
 */

import { TreeNode } from "./tree-node";

const countGoodNodes = (root: TreeNode<number> | null): number => {
  const dfs = (node: TreeNode<number> | null, maxSoFar: number): number => {
    if (!node) {
      return 0;
    }

    maxSoFar = Math.max(maxSoFar, node.val);
    const left = dfs(node.left, maxSoFar);
    const right = dfs(node.right, maxSoFar);

    let result = left + right;
    if (node.val >= maxSoFar) {
      result++;
    }

    return result;
  };

  return dfs(root, -Infinity);
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const result = countGoodNodes(root);

console.log({ result });
