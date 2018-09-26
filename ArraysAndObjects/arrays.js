/*
  Arrays -> ordered lists
  when to use:
  - when you need fast access/insortion and removal (sort of)
  - when you need order
*/

const languages = ["JavaScript", "Python", "Ruby"];

/*
  Big O of Arrays: 
  - access: O(1)
  - searching: O(n)
  - insertion: it depends
  - removal: it depends

  - push: O(1)
  - pop: O(1)
  ----------------
  - shift: O(n)
  - unshift: O(n)
    (you have to re-index every element in the array if you adding to the beggining or removing from the beggining)
  ----------------
  - concat: O(n)
  - slice: O(n)
  - splice: O(n)
  - sort: O(n log n)
  - forEach, map, filter, reduce...: O(n)
*/
