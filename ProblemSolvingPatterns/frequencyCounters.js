/*
  Frequency Counters Pattern:
  - uses objects or sets to collect values/frequencies of values
  - can often avoid the need for nested loops or O(n^2) operations with arrays or strings
*/

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) { // time complexity: O(n^2)
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) { // loop: O(n)
    const index = arr2.indexOf(arr1[i] ** 2); // indexOf: O(n) (nested)
    if (index === -1) return false;
    arr2.splice(index, 1);
  }
  return true;
}

function sameWithCounter(arr1, arr2) { // time complexity: O(n)
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = arr1.reduce((acc, next) => (
    { ...acc, [next]: acc[next] + 1 || 1 }
  ), {}); // O(n)
  const frequencyCounter2 = arr2.reduce((acc, next) => (
    { ...acc, [next]: acc[next] + 1 || 1 }
  ), {}); // O(n)

  for (let key in frequencyCounter1) { // O(n)
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const letterCounter1 = str1.split('').reduce((acc, next) => ({
    ...acc, [next]: acc[next] + 1 || 1
  }), {});
  const letterCounter2 = str2.split('').reduce((acc, next) => ({
    ...acc, [next]: acc[next] + 1 || 1
  }), {});

  for (let key in letterCounter1) {
    if (!(key in letterCounter2)) return false;
    if (letterCounter2[key] !== letterCounter1[key]) return false;
  }

  return true;
}

module.exports = {
  same,
  sameWithCounter,
  isAnagram,
};
