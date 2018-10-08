const expect = require('chai').expect;

const { same, sameWithCounter, isAnagram } = require('./frequencyCounters');

describe('Frequency Counters Pattern', () => {
  
  it('returns true if every value in the array has it\'s corresponding value squared in the second array', () => {
    expect(same([1, 2, 3], [4, 9 ,1])).to.equal(true);
    expect(same([1, 2, 3], [1, 9])).to.equal(false);
    expect(same([1, 2, 1], [4, 4, 1])).to.equal(false);
  });

  it('returns true if every value in the array has it\'s corresponding value squared in the second array', () => {
    expect(sameWithCounter([1, 2, 3], [4, 9, 1])).to.equal(true);
    expect(sameWithCounter([1, 2, 3], [1, 9])).to.equal(false);
    expect(sameWithCounter([1, 2, 1], [4, 4, 1])).to.equal(false);
  });

  it('determines if the second string is an anagram of the first' , () => {
    expect(isAnagram('', '')).to.equal(true);
    expect(isAnagram('aaz', 'zza')).to.equal(false);
    expect(isAnagram('anagram', 'nagaram')).to.equal(true);
    expect(isAnagram("rat", "car")).to.equal(false);
    expect(isAnagram('awesome', 'awesom')).to.equal(false);
    expect(isAnagram('qwerty', 'qeywrt')).to.equal(true);
    expect(isAnagram('texttwisttime', 'timetwisttext')).to.equal(true);
  });
  
});
