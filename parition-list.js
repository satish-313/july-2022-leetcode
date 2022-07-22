class Tree {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const a = new Tree(1, null);
const b = new Tree(4, null);
const c = new Tree(3, null);
const d = new Tree(2, null);
const e = new Tree(5, null);
const f = new Tree(2, null);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const print = (head) => {
  while (head !== null) {
    process.stdout.write(`${head.val} `);
    head = head.next;
  }
  console.log("\n");
};

const partition = (head, x) => {
  let current = head;
  let nhead = new Tree(0, null);
  let ncurrent = nhead;
  
  while (current) {
    if (current.val < x) {
      ncurrent.next = new Tree(current.val, null);
      ncurrent = ncurrent.next;
    }
    current = current.next;
  }

  current = head;
  while (current) {
    if (current.val >= x) {
      ncurrent.next = new Tree(current.val, null);
      ncurrent = ncurrent.next;
    }
    current = current.next;
  }

  return nhead.next;
};

print(partition(a, 3));
