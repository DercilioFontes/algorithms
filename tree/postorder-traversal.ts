import { TreeNode } from "./tree-node";

const postorderDfs = (node: TreeNode | null) => {
  if (!node) {
    return;
  }

  postorderDfs(node.left);
  postorderDfs(node.right);
  console.log(node.val);
  return;
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.right = new TreeNode(6);
root.right = new TreeNode(2);
root.right.right = new TreeNode(5);

postorderDfs(root);
