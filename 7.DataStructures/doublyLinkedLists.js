/*
  Doubly Linked List
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
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
// list.pop();
// list.pop();
list.unshift(-2);
list.unshift(15);
// console.log(list);
list.set(2, 3);
console.log(list.get(2));
