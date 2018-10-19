
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
    let biggest = parentIndex;
    if (leftIndex < values.length && values[leftIndex] > values[rightIndex]) {
      biggest = leftIndex;
    }
    if (rightIndex < values.length && values[rightIndex] > values[leftIndex]) {
      biggest = rightIndex;
    }
    if (biggest !== parentIndex) {
      [values[parentIndex], values[biggest]] = [values[biggest], values[parentIndex]];
      this.sinkDown(biggest);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(12);
heap.insert(2);
heap.insert(4);
heap.insert(22);
heap.insert(200);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
