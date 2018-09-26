const now = require('performance-now');

function findSum(n) {
  return n * (n - 1) / 2;
}

let start = now();
findSum(1000000000);
let end = now();
console.log(`Time Elapsed: ${(end - start) / 1000} seconds.`);
