import { TreeNode } from "../tree-node";

const validBST = (root: TreeNode<number> | null): boolean => {
  const dfs = (node: TreeNode<number> | null, small: number, large: number): boolean => {
    if (!node) return true;

    if (small >= node.val || node.val >= large) {
      return false;
    }

    const left = dfs(node.left, small, node.val);
    const right = dfs(node.right, node.val, large);

    // tree is a bst if left and right subtrees are also BSTs
    return left && right;
  };

  return dfs(root, -Infinity, Infinity);
};

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(8);
root.right = new TreeNode(12);
root.right.right = new TreeNode(23);

const result = validBST(root);

console.log({ result });
