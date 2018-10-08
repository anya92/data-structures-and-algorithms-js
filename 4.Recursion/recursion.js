/*
  Recursion:
  - a process (a function) that calls itself
  - invoke the same function with a different input until you reach your base case
  - base case - the condition when the recursion ends
*/

/*
  Call Stack
  - in almost all program languages, there is a built in data structure that manages what happens when functions are invoked
  - the call stack is a stack data structure
  - any time a function is invoked it is placed (pushed) on top of the call stack
  - when JavaScript sees the return keyword or when the function end, the compiler will remove (pop)
*/

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  countDown(num - 1);
}

countDown(10);

function sumRange(num) {
  if (num == 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

function factorialIteratively(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorialIteratively(3));

function factorialRecursively(num) {
  if (num <= 1) return 1;
  return num * factorialRecursively(num - 1);
}

console.log(factorialRecursively(4));

// Recursion as a helper method

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));

// the same as a pure recursion

function collectOddValuesRecursively(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValuesRecursively(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesRecursively([1, 2, 3, 4, 5]));


/*
  pure recursion tips:
  - for arrays use slice, the spread operator or concat to make copies of arrays so you do not mutate them,
  - strings are immutable so you will need to use methods like slice, substr or substring
  - for objects: Object.assign or the spread operator
*/
