function stringSearch(string, pattern) {
  let count = 0;
  // lover over the string
  for (let i = 0; i < string.length - pattern.length + 1; i++) {
    // loop over the pattern
    for (let j = 0; j < pattern.length; j++) {
      // if the characters do not match break out of the inner loop
      if (pattern[j] !== string[i + j]) break;
      // if you complete the inner loop increment the count of matches
      if (j == pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch('haomgtrehomskomgha', 'ha'));
