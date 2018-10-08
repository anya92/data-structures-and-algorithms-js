// given two positive integers find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) { // time complexity: O(n)
  const num1String = String(num1);
  const num2String = String(num2);
  if (num1String.length !== num2String.length) return false;
  
  const num1Frequency = num1String.split('').reduce((acc, next) => ({
    ...acc,
    [next]: acc[next] + 1 || 1,
  }), {});
  const num2Frequency = num2String.split('').reduce((acc, next) => ({
    ...acc,
    [next]: acc[next] + 1 || 1,
  }), {});

  for (let key in num1Frequency) {
    if (num1Frequency[key] !== num2Frequency[key]) return false;
  }
  return true;
}

function areThereDuplicates() { // frequency counters
  const counter = [...arguments].reduce((acc, next) => ({ ...acc, [next]: acc[next] + 1 || 1}), {});
  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
}

function areThereDuplicates2() { // multiple pointers
  const values = [...arguments].sort((a, b) => a > b);
  let left = 0;
  let right = 1;
  while (right < values.length) {
    if (values[left] === values[right]) return true;
    else {
      left++;
      right++;
    }
  }
  return false;
}

function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

// Write a function called averagePair that accepts a sorted array of integers and a target average number. Determine if there is a pair of values in the array whose average equals the target. 

function averagePair(arr, target) { // time complexity: O(n)
  if (arr.length < 2) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average == target) return true;
    if (average > target) right--;
    else left++;
  }
  return false;
}

module.exports = {
  sameFrequency,
  areThereDuplicates,
  areThereDuplicates2,
  areThereDuplicates3,
  averagePair,
}
