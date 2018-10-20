
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let { values } = this;
    values.push(value);
    
    let index = values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = values[parentIndex];
      if (value <= parent) break;
      values[parentIndex] = value;
      values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    let { values } = this;
    let max = values[0];
    let end = values.pop();
    if (values.length > 0) {
      values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown(parentIndex = 0) {
    let { values } = this;
    let leftIndex = 2 * parentIndex + 1,
        rightIndex = 2 * parentIndex + 2;
    const element = values[parentIndex], leftItem = values[leftIndex], rightItem = values[rightIndex], length =  values.length;
    let bigger = null;
    if (leftIndex < length && leftItem > element) bigger = leftIndex;
    if (rightIndex < length) {
      if (bigger === null && rightItem > element || bigger !== null && rightItem > leftItem) bigger = rightIndex;
    }
    if (bigger !== null) {
      [values[parentIndex], values[bigger]] = [values[bigger], values[parentIndex]];
      this.sinkDown(bigger);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(12);
heap.insert(2);
heap.insert(22);
heap.insert(200);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);

/**
 * Priority Queue
 * 
*/

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue { // min binary heap
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    const { values } = this;
    values.push(newNode);
    let index = values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = values[parentIndex];
      if (priority > parent.priority) break;
      values[parentIndex] = newNode;
      values[index] = parent;
      index = parentIndex;
    }
  }

    dequeue() {
    let { values } = this;
    let min = values[0];
    let end = values.pop();
    if (values.length > 0) {
      values[0] = end;
      this.sinkUp();
    }
    return min;
  }

  sinkUp(parentIndex = 0) {
    let { values } = this;
    let leftIndex = 2 * parentIndex + 1,
        rightIndex = 2 * parentIndex + 2;
    const element = values[parentIndex], leftItem = values[leftIndex], rightItem = values[rightIndex], length = values.length;
    let smaller = null;
    if (leftIndex < length && leftItem.priority < element.priority) smaller = leftIndex;
    if (rightIndex < length) {
      if (smaller === null && rightItem.priority < element.priority ||
        smaller !== null && rightItem.priority < leftItem.priority) smaller = rightIndex;
    } 
    if (smaller !== null) {
      [values[parentIndex], values[smaller]] = [values[smaller], values[parentIndex]];
      this.sinkUp(smaller);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("four", 4);
pq.enqueue("five", 5);
pq.enqueue("three", 3);
pq.enqueue("one", 1);
pq.enqueue("two", 2);
console.log(pq);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
