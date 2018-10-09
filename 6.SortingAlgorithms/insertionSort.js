/*
  Insertion Sort
  - builds the final sorted array one item at a time
  - works the way we sort playing cards in our hands
  - can be useful when input array is almost sorted, only few elements are misplaced in complete big array
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];
    let j = i - 1;
    // Move elements of arr[0...i-1], that are greater than el, to one position ahead of their current position 
    while (j >= 0 && arr[j] > el) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = el;
  }
  return arr;
}

console.log(insertionSort([2, 5, 1, 4, 6, 11, -2]))

/*
  Worst and Average Case Time Complexity: O(n^2)
  Best Case Time Complexity: O(n)
*/
