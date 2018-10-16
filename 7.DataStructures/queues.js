/*
  Queue:
  -  a linear structure which follows a particular order in which the operations are performed -> FIFO (First In First Out)
  
  Array Implementation:
  - push() and shift()
  - or unshift() and pop()
*/

// Linked List Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) { // adds an item to the queue
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() { // removes an item from the queue
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

let queue = new Queue();

queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");

console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);

/*
  Time complexity:
  - insertion: O(1)
  - removal: O(1)
*/
