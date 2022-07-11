class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);

a.left = b;
a.right = c;
b.right = e;
c.right = d;

const rightSideView = (root) => {
  if (root === null) return [];
  const result = [];
  let stack = [root];

  while (stack.length > 0) {
    const next = [];
    result.push(stack[stack.length - 1].val);

    for (let node of stack) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }

    if (next.length !== 0) stack = [...next];
    else break
  }

  return result;
};

console.log(rightSideView(a));
console.log(rightSideView(null));
