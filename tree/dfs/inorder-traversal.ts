import { TreeNode } from "../tree-node";

const inorderDfs = (node: TreeNode | null) => {
  if (!node) {
    return;
  }

  inorderDfs(node.left);
  console.log(node.val);
  inorderDfs(node.right);
  return;
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.right = new TreeNode(6);
root.right = new TreeNode(2);
root.right.right = new TreeNode(5);

inorderDfs(root);
