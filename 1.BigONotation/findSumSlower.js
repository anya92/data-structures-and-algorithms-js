const now = require('performance-now');

function findSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let start = now();
findSum(1000000000);
let end = now();
console.log(`Time Elapsed: ${(end - start) / 1000} seconds.`);
