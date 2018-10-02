/*
  Sliding Window Pattern
  - this pattern involves creating a window (an array or number from one position to another)
  - depending on a certain condition, the window either increases or closes
  - very useful for keeping track of a subset of data in an array or string
*/

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) { // time complexity: O(n ^ 2)
  if (n > arr.length) return null;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j];
    }
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
}

function maxSubarraySumWithSlidingWindow(arr, n) { // time complexity: O(n)
  if (n > arr.length) return null;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let sum = maxSum;
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
}

module.exports = {
  maxSubarraySum,
  maxSubarraySumWithSlidingWindow,
}
