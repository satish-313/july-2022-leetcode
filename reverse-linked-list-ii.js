class Tree {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const a = new Tree(1, null);
const b = new Tree(2, null);
const c = new Tree(3, null);
const d = new Tree(4, null);
const e = new Tree(5, null);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const print = (head) => {
  while (head !== null) {
    process.stdout.write(`${head.val} `);
    head = head.next;
  }
  console.log("\n");
};

const reveseBetween = (head, left, right) => {
  if (left === right) return head;
  let current = head;
  let len = 0;
  let leftEl;
  let rightEl;

  while (current !== null) {
    len += 1;
    if (len === left) leftEl = current;
    if (len === right) rightEl = current;
    current = current.next;
  }

  if (left === 1) head = new Tree(rightEl.val, leftEl.next);
  current = head;
  len = 0;

  while (current !== null) {
    len += 1;
    if (len + 1 === left) current.next = new Tree(rightEl.val, leftEl.next);
    if (len + 1 === right) current.next = new Tree(leftEl.val, rightEl.next);
    current = current.next;
  }

  return head;
};

const reveseBetweenii = (head, left, right) => {
  if (left === right) return head;

  let current = head,
    leftEl = null,
    rightEl = null,
    len = 0;

  while (current !== null) {
    len += 1;
    if (len === left) leftEl = current;
    if (len === right) rightEl = current;

    current = current.next;
  }

  let next,
    prev = leftEl;
  current = leftEl;

  while(current !== null) {
    next = current.next;
    
  }

  return head;
};

print(a);
print(reveseBetweenii(a, 2, 4));
