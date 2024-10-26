// https://github.com/AvraamMavridis/Algorithms-Data-Structures-in-Typescript/blob/master/algorithms/binarytree.md

interface MyNode {
  value: number;
  left?: MyNode;
  right?: MyNode;
}

// Tree representation
const value13: MyNode = { value: 13, left: undefined, right: undefined };
const value14: MyNode = { value: 14, left: value13, right: undefined };
const value7: MyNode = { value: 7, left: undefined, right: undefined };
const value4: MyNode = { value: 4, left: undefined, right: undefined };
const value6: MyNode = { value: 6, left: value4, right: value7 };
const value1: MyNode = { value: 1, left: undefined, right: undefined };
const value3: MyNode = { value: 3, left: value1, right: value6 };
const value10: MyNode = { value: 10, left: undefined, right: value14 };
const root: MyNode = { value: 8, left: value3, right: value10 };

const findPath = function (
  this: any,
  root: MyNode | undefined,
  value: number
): MyNode[] {
  if (!root || !root.value) return [];
  this.path = this.path || {};
  this.path[value] = this.path[value] || [];

  if (root.value === value) {
    return this.path[value];
  } else if (value > root.value) {
    findPath(root.right, value);
  } else {
    findPath(root.left, value);
  }

  return this.path[value];
};

const find = function (
  root: MyNode | undefined,
  value: number
): MyNode | undefined {
  if (!root || !root.value) return undefined;

  if (root.value === value) {
    return root;
  } else if (value > root.value) {
    return find(root.right, value);
  } else {
    return find(root.left, value);
  }
};

const insert = function (root: MyNode, value: number): MyNode {
  if (value > root.value) {
    if (!root.right) {
      root.right = { value };
    } else {
      insert(root.right, value);
    }
  } else if (value < root.value) {
    if (!root.left) {
      root.left = { value };
    } else {
      insert(root.left, value);
    }
  }

  return root;
};

const traverse = function (root: MyNode | undefined, cb: Function) {
  if (root && root.value) {
    cb(root);
    traverse(root.right, cb);
    traverse(root.left, cb);
  }
};

const findMin = function (root: MyNode): number {
  if (root.left) return findMin(root.left);
  else return root.value;
};

const findMax = function (root: MyNode): number {
  if (root.right) return findMax(root.right);
  else return root.value;
};

const findParentOfToBeDeletedNode = function (
  root: MyNode,
  value: number
): MyNode {
  let node = root;
  const cb = (root: MyNode) => {
    if (
      root &&
      ((root.right && root.right.value === value) ||
        (root.left && root.left.value === value))
    ) {
      node = root;
    }
  };

  traverse(root, cb);
  return node;
};

const deleteNode = function (root: MyNode, value: number) {
  let parent = findParentOfToBeDeletedNode(root, value);
  let node = find(root, value);

  // leaves
  if (node?.left === undefined && node?.right === undefined) {
    if (parent.right?.value === node?.value) {
      parent.left = undefined;
    } else if (parent.right?.value === node?.value) {
      parent.right = undefined;
    }
  } else if (node.left === undefined && node.right !== undefined) {
    if (parent.left?.value === node.value) {
      parent.left = node.right;
    } else if (parent.right?.value === node.value) {
      parent.right = node.right;
    }
  } else if (node.left !== undefined && node.right === undefined) {
    if (parent.left?.value === node.value) {
      parent.left = node.left;
    } else if (parent.right?.value === node.value) {
      parent.right = node.left;
    }
  } else if (node.left && node.right) {
    let min = node.right.value;
    let pointer: MyNode | undefined = node.right;
    while (pointer) {
      min = pointer.value;
      pointer = pointer.left;
    }
    deleteNode(node, min);

    node.value = min;
  }
};
