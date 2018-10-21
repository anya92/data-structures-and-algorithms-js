/**
 * Hash Table (Map):
 * - a collection of key-value pairs,
 * - data is stored in an array format, where each data value has its own unique index value
 * Hash function - a function that converts keys into array indices
 * When we put objects into a Hash Table, it is possible that different objects might have the same hashcode - this is called collision
 * Collision Handling:
 * - separate chaining - at each index in an array we store values using arrays or linked lists
 * - linear probing - when we find a collision, we search through the array to find the next empty slot
 */

function hash (key, size) {
  let total = 0;
  const PRIME_NUMBER = 31;
  for (let i = 1; i < Math.min(key.length, 100); i++) {
    let value = key[i].charCodeAt(0) - 96;
    total = (total * PRIME_NUMBER + value) % size; 
  }
  return total;
}

console.log(hash('pink', 15));
console.log(hash('blue', 15));
console.log(hash('yellow', 15));

class HashTable {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME_NUMBER = 31;
    for (let i = 1; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] == key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) keys.push(this.keyMap[i][j][0]);
      };
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      };
    }
    return values;
  }
}

let ht = new HashTable();
ht.set('white', '#ffffff');
ht.set('black', '#000000');
ht.set('red', '#00ffff');

console.log(JSON.stringify(ht));
console.log(ht.get('black'));
console.log(ht.keys());
console.log(ht.values());


/**
 * Time complexity (average):
 * - insert: O(1),
 * - deletion: O(1),
 * - search: O(1)
 */
