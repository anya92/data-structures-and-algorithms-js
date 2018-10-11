/*
  Radix Sort
  - 
*/

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / 10 ** i) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  return Math.max(...nums.map(n => digitCount(n)));
}

function radixSort(arr) {
  let maxDigit = mostDigits(arr);
  for (let k = 0; k < maxDigit; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([12, 5, 34, 87, 145, 8921, 994, 23, 1]));

/*
  Time complexity:
  - worst, average, best: O(nk)
    - n - length of array
    - k - number of digits
*/
