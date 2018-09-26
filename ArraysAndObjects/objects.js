/* 
  Objects -> unordered, key value pairs
  when to use:
  - when you need fast access/insertion and removal
  - when you do not need order
*/

const person = {
  name: 'Emily',
  age: 28,
  pets: ['cat', 'dog'],
};

/*
  Big O of Objects:
  - insertion: O(1)
  - access: O(1)
  - removal: O(1)
  - searching: O(n)

  - Object.keys: O(n)
  - Object.values: O(n)
  - Object.entries: O(n)
  - hasOwnProperty: O(1)
*/

