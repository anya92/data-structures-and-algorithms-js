/*
  Merge Sort
  - a Divide and Conquer algorithm
  - divides input array in two halves, calls itself for the two halves and then merges the two sorted halves
*/

// merge function
function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    }
    else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

// console.log(merge([1, 4, 6], [2, 7, 9, 11]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

console.log(mergeSort([4, 1, 8, 3, 11, 2, 42, 11, -5]));

/*
  Time complexity (worst, average and best): O(n log n)
  - O(log n) decompositions
  - O(n) comparisons per decomposition
*/
