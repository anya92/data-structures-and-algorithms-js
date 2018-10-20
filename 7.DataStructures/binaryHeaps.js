/**
 * Binary Heap:
 * - a complete tree (all levels are completely filled except possibly the last level and the last level has all keys as left as possible)
 * - is either Min Heap (parents are smaller than their children) or Max Heap (parents are bigger than their children)
 * - is suitable to be stored in an array:
 *  - root element at arr[0],
 *  - parent node - arr[(i - 1) / 2],
 *  - left child - arr[2i + 1],
 *  - right child - arr[2i + 2]
 */
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

  extractMax() { // removes the maximum element of the Binary Heap
    let { values } = this;
    let max = values[0];
    let end = values.pop();
    if (values.length > 0) {
      values[0] = end;
      this.heapify();
    }
    return max;
  }

  heapify(i = 0) {
    let { values } = this;
    let l = 2 * i + 1,
        r = 2 * i + 2,
        { length } = values;
    let bigger = i;
    if (l < length && values[l] > values[bigger])
      bigger = l;
    if (r < length && values[r] > values[bigger]) {
      bigger = r;
    }
    if (bigger !== i) {
      [values[i], values[bigger]] = [values[bigger], values[i]];
      this.heapify(bigger);
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
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap);

/**
 * Priority Queue:
 * - an extension of queue with following properties:
 *  - every item has a priority associated with it,
 *  - an element with high priority is dequeued before an element with low priority.
 * Heap is generally preferred for priority queue implementation because heaps provide better performance compared arrays or linked list.
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
      this.heapify();
    }
    return min;
  }

  heapify(i = 0) {
    let { values } = this;
    let l = 2 * i + 1,
        r = 2 * i + 2,
        { length } = values;
    let smaller = i;
    if (l < length && values[l].priority < values[smaller].priority) {
      smaller = l;
    }
    if (r < length && values[r].priority < values[smaller].priority) {
      smaller = r;
    }
    if (smaller !== i) {
      [values[i], values[smaller]] = [values[smaller], values[i]];
      this.heapify(smaller);
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


/**
 * Time complexity:
 * - insertion: O(log n),
 * - removal: O(log n),
 * - search: O(n)
 */
