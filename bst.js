class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;

      // We want to manually  break so that we can
      while (true) {
        if (current.value > value) {
          // Go Left
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            break;
          }
        } else {
          // Go Right
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }

    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const nums = [3, 7, 10, 9, 12, 2, 5];

const tree = new Tree();

nums.map((e) => tree.add(e));

console.log(tree);
