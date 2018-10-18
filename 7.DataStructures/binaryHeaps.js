
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
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(12);
heap.insert(2);
heap.insert(4);
heap.insert(22);
heap.insert(200)
console.log(heap);
