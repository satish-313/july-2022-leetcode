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

  let curr = head, prevLeft = null, postRight = null, len = 0;

  while (curr) {
    len += 1;
    if (len === left - 1) prevLeft = curr; /* previous position of left */
    if (len === right + 1) postRight = curr; /* next position of right */
    curr = curr.next;
  }

  const reverse = (curr, head, start, end, time) => {
    let next,prev = end;

    while (time > 0) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      time -= 1;
    }

    if (start) { /* if start is null */
      start.next = prev;
      return head;
    }

    return prev;
  };

  return reverse(
    prevLeft ? prevLeft.next : head, /* if left is 1 then prevLeft is null (prevLeft.next will be error) in case send head*/
    head, /* for sending head after adjustment */
    prevLeft, /* start point of after reverse */
    postRight, /* ending point after reverse */
    right - left + 1 /* number of time req for adjustment */
  );
};

print(a);
print(reveseBetweenii(a, 3, 4));
