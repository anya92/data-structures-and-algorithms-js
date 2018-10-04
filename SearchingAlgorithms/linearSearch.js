/*
  Searching
  - given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.
  - in JavaScript: indexOf, includes, find, findIndex
*/

// function accepts an array and a value
function linearSearch(arr, value) {
  // loop through the array and check if the current array element is equal to the value
  for (let i = 0; i < arr.length; i++) {
    // if it is, return the index at which the element is found
    if (arr[i] === value) return i;
  }
  // if the value is never found, return -1
  return -1;
}

linearSearch([2, 5, 1, 7, 3, 1], 3); // 4
linearSearch([2, 5, 1, 7, 3, 1], 4); // -1

// Linear Search Big O => O(n)
