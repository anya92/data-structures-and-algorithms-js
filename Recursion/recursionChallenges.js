// power

function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}

// factorial

function factorial(num) {
  if (num < 1) return 0;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// product of array

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// recursive range

function range(num) {
  if (num === 0) return 0;
  return num + range(num - 1); 
}

// fibonacci

function fibonacci(n) {
  if (n === 0 || n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
  power,
  factorial,
  productOfArray,
  range,
  fibonacci,
}
