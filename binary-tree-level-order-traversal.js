class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

const levelOrder = (root) => {
  if (root === null) return [];

  const output = [];
  const stack = [[root]];

  while (stack.length > 0) {
    const current = stack.pop();
    const next = [];

    output.push([]);

    for (let ele of current) {
      output[output.length - 1].push(ele.val);
      if (ele.left) next.push(ele.left);
      if (ele.right) next.push(ele.right);
    }

    if (next.length !== 0) stack.push([...next]);
  }

  return output;
};

console.log(levelOrder(a));
