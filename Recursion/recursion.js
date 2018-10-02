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
