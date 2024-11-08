import { TreeNode } from "../tree-node";

const preorderDfs = (node: TreeNode | null) => {
  if (!node) {
    return;
  }

  console.log(node.val);
  preorderDfs(node.left);
  preorderDfs(node.right);
  return;
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.right = new TreeNode(6);
root.right = new TreeNode(2);
root.right.right = new TreeNode(5);

preorderDfs(root);
