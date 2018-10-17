class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    if (value === currentNode.value) return undefined;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value, currentNode = this.root) {
    if (!currentNode) return null;
    if (value === currentNode.value) return currentNode;
    if (value < currentNode.value) return this.find(value, currentNode.left);
    else return this.find(value, currentNode.right);
  }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(4);
tree.insert(14);
tree.insert(3);
tree.insert(11);
console.log(JSON.stringify(tree))
console.log(tree.find(15));
