export class TreeNode {
  val: unknown;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: unknown) {
    this.val = val;
  }
}
