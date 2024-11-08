import { TreeNode } from "../tree-node";

const hasPathSum = (
  root: TreeNode<number> | null,
  targetSum: number
): boolean => {
  const dfs = (node: TreeNode<number> | null, curr: number): boolean => {
    if (!node) {
      return false;
    }

    // if both children are null, then the node is a leaf
    if (!node.left && !node.right) {
      return curr + node.val === targetSum;
    }

    curr += node.val;
    const left = dfs(node.left, curr);
    const right = dfs(node.right, curr);
    return left || right;
  };

  return dfs(root, 0);
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

const result = hasPathSum(root, 22);

console.log({ result });
