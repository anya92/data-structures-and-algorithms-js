/*
  Divide and Conquer Pattern
  - involves dividing a data set into smaller chunks and then repeating a process with a subset of data
*/

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// Linear Search

function search(arr, val) { // time complexity: O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// Binary Search -> time complexity: O(log n)


module.exports = {
  search,
}
