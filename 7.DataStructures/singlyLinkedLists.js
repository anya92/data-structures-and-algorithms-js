/*
  Singly Linked List:
  - a type of data structure
  - each node in the list stores the value and a pointer or reference to the next node in the list
  - difference between Array and Linked List: 
    https://www.studytonight.com/data-structures/linked-list-vs-array
*/

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

  insert(index, value) { // adding a new node to the Linked List at a specific position
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    let previousNode = this.get(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) { // removing a node from the Linked List at a specific position
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() { // reversing the Linked List
    let previousNode = null;
    let nextNode = null;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
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
list.get(1);
list.set(2, 4);
list.insert(1, -5);
list.remove(2);
list.reverse();

/*
  Time Complexity:
  - insertion: O(1)
  - removal: best -> O(1), worst -> O(n)
  - searching: O(n)
  - access: O(n)
*/
