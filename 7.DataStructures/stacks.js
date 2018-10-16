/*
  Stack:
  - a linear data structure which follows a particular order in which the operations are performed:
    - LIFO (Last In First Out) 
    - or FILO (First In Last Out)
  - there are two ways to implement a stack:
    - using array
    - using linked list
  Array Implementation:
  - push() and pop() or
  - unshift() and shift()
*/

// Linked List Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) { //  adds an item in the stack
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() { // removes an item from the stack
    if (this.size === 0) return null;
    const temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();

stack.push(12);
stack.push(43);
stack.push(6);
console.log(stack)
stack.pop();
stack.pop();
console.log(stack)

/*
  Time complexity:
  - insertion: O(1)
  - removal: O(1)
  - access: O(n)
  - searching: O(n)
*/
