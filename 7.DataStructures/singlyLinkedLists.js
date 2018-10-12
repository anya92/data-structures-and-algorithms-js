class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) { // adding a new node to the end of the Linked List
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() { // removing a node form the end of the Linked List
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  unshift(value) { // adding a new node to the beginning of the Linked List
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() { // removing a node from the beginning of the Linked List
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  get(index) { // retrieving a node by its position in the Linked List
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let currentNode = this.head;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  set(index, value) { // changing the value of a node based on its position in the Linked List
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push(2);
list.push(5);
list.push(8);
list.pop();
list.shift();
list.unshift(0);
list.push(14);
console.log(JSON.stringify(list, null, ' '));
console.log(list.get(1))
console.log(list.set(3, 4))
