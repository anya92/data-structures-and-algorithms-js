/**
  * Trees:
  * - unlike Arrays, Linked Lists, Stack and Queues, which are linear data structures, trees are hierarchical data structures,
  * - root - the topmost node,
  * - children - elements that are directly under an element,
  * - parent - the element directly above something,
  * - leaves - elements with no children.
*/

/** 
 * Binary Tree - a tree whose elements have at most 2 children (the left and right child).
 * Binary Search Tree - a node-based binary tree data structure:
 *  - the left subtree of a node contains only nodes with values lesser than the node’s value,
 *  - the right subtree of a node contains only nodes with values greater than the node’s value,
 *  - the left and right subtree each must also be a binary search tree.
*/

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

  find(value, currentNode = this.root) { // finding a node in the BST (recursively)
    if (!currentNode) return null;
    if (value === currentNode.value) return currentNode;
    if (value < currentNode.value) return this.find(value, currentNode.left);
    else return this.find(value, currentNode.right);
  }

  breadthFirstSearch() {
    let queue = [];
    let values = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      values.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;
  }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(4);
tree.insert(14);
tree.insert(3);
tree.insert(11);
console.log(JSON.stringify(tree));
console.log(tree.find(4));
console.log(tree.breadthFirstSearch());

/** 
  * Time complexity:
  * - inserting: O(log n)
  * - searching: O(log n)
*/
