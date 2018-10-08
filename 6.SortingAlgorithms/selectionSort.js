/*
  Selection Sort
  - sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning
*/

function selectionSort(arr) {
  const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

  for (let i = 0; i < arr.length; i++) {
    // Find the minimum element in unsorted array 
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minInd]) minInd = j;
    }
    // Swap the found minimum element with the first element 
    if (minInd !== i) swap(arr, i, minInd); 
  }
  return arr;
}

console.log(selectionSort([3, 1, 4, 8, 11, 2, -3]));


/*
  Time Complexity: O(n^2) -> there are two nested loops
*/
