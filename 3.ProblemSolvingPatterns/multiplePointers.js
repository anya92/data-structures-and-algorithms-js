/*
  Multiple Pointers Pattern
  - creating pointers or values that correspond to an index and move towards the beggining, end or middle based on a certain condition
  - very efficient for solving problems with minimal space complexity
*/

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) { // time complexity: O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) return [arr[i], arr[j]];
    }
  }
}

function sumZeroWithPointers(arr) { // time complexity: O(n)
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];
    if (sum == 0) return [arr[leftIndex], arr[rightIndex]];
    else if (sum > 0) rightIndex--;
    else leftIndex++;
  }
}

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  // return new Set(arr).size;
  if (!arr.length) return 0;
  if (arr.length == 1) return 1;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

module.exports = {
  sumZero,
  sumZeroWithPointers,
  countUniqueValues,
};
