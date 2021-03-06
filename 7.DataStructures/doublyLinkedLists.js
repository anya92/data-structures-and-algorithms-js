/*
  Doubly Linked List
  - contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list
  Advantages over singly linked list:
  - DLL can be traversed in both forward and backward direction
  - the delete operation in DLL is more efficient if pointer to the node to be deleted is given
  - we can quickly insert a new node before a given node
  Disadvantages over singly linked list:
  - every node of DLL require extra space for an previous pointer
  - all operations require an extra pointer previous to be maintained
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) { // adding a new node to the end of the Doubly Linked List
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() { // removing a node from the end of the Doubly Linked List
    if (!this.tail) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  unshift(value) { // adding a new node to the beginning of the Doubly Linked List
     const newNode = new Node(value);
     if (!this.head) {
       this.head = newNode;
       this.tail = newNode;
     } else {
       newNode.next = this.head;
       this.head.prev = newNode;
       this.head = newNode;
     }
     this.length++;
     return this;
  }

  shift() { // removing a node from the beginning of the Doubly Linked List
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  get(index) { // accessing a node in the Doubly Linked List by its position
    if (index < 0 || index >= this.length) return null;
    let i;
    let currentNode;
    if (index <= this.length / 2) {
      i = 0;
      currentNode = this.head;
      while (i < index) {
        currentNode = currentNode.next;
        i++;
      }
    } else {
      i = this.length - 1;
      currentNode = this.tail;
      while (i > index) {
        currentNode = currentNode.prev;
        i--;
      }
    }
    return currentNode;
  }

  set(index, value) { // changing the value of a node based on its position in the Doubly Linked List
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) { // adding a new node to the Doubly Linked List at a specific position
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let nodeBefore = this.get(index - 1);
    let nodeAfter = nodeBefore.next;
    nodeBefore.next = newNode;
    newNode.prev = nodeBefore;
    newNode.next = nodeAfter;
    nodeAfter.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) { // removing a node from the Doubly Linked List at a specific position
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let removedNode = this.get(index);
    let nodeBefore = removedNode.prev;
    let nodeAfter = removedNode.next;
    nodeBefore.next = nodeAfter, nodeAfter.prev = nodeBefore;
    removedNode.next = null, removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
// list.pop();
// list.pop();
list.unshift(-2);
list.unshift(15);
// console.log(list);
list.get(2);
list.set(2, 3);
list.insert(1, -1000);
console.log(list);


/*
  Time complexity:
  - adding: O(1)
  - removing: O(1)
  - searching: O(n)
  - accessing: O(n)
*/
