import { TreeNode } from "../tree-node";

const minAbsDiffDFS = (root: TreeNode<number> | null): number => {
  const values: number[] = [];

  const dfs = (node: TreeNode<number> | null) => {
    if (!node) return;
    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
    return;
  };

  dfs(root);
  let ans = Infinity;
  for (let i = 1; i < values.length; i++) {
    ans = Math.min(ans, values[i] - values[i - 1]);
  }

  return ans;
};

const root = new TreeNode(9);
root.left = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(7);
root.right = new TreeNode(15);

const result = minAbsDiffDFS(root);

console.log({ result });
