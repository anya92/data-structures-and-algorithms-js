/*
  Bubble Sort
  - works by repeatedly swapping the adjacent elements if they are in wrong order
  - is named for the way smaller or larger elements "bubble" to the top of the list
*/

function bubbleSort(arr) { // optimized version
  function swap(arr, ind1, ind2) {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
  }
  // ES2015
  // const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    // Last i elements are already in place 
    for (let j = 0; j < i - 1; j++) {
      // Swap if the element found is greater 
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1); 
        noSwap = false;
      }
    }
    // if no two elements were swapped by inner loop, then break 
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([2, 14, 3, 22, 8, 10, 1, 24, -2]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

/*
  Worst and Average Case Time Complexity: O(n^2)
  - worst case -> when array is reverse sorted

  Best Case Time Complexity: O(n)
  - best case -> when array is already sorted
*/
