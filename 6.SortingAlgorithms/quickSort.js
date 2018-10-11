/* 
  pivot function - takes first element as pivot, places
  the pivot element at its correct position in sorted
  array, and places all smaller to left of pivot 
  and all greater elements to right of pivot
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  // element to be placed at right position
  let pivot = arr[start];
  const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  let swapIndex = start; // index of smaller element
  for (let i = start + 1; i < arr.length; i++) {
    // If current element is smaller than pivot
    if (arr[i] < pivot) {
      // increment index of smaller element and swap the current element with the element with the pivot index
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  // swap the starting element with the pivot index
  swap(arr, swapIndex, start);
  return swapIndex;
}

// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotInd = pivot(arr, left, right);
    quickSort(arr, left, pivotInd - 1); // sort elements before pivot
    quickSort(arr, pivotInd + 1, right); // sort elements after pivot
  }
  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

/*
  Time complexity:
  - best and average: O(n log n)
  - worst: O(n^2)
*/
