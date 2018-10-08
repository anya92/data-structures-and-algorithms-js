const expect  = require('chai').expect;

const { sumZero, sumZeroWithPointers, countUniqueValues } = require('./multiplePointers');

describe('Multiple Pointers Pattern', () => {
  
  it('returns an array that includes both values that sum to zero or undefined if a pair does not exist', () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).to.deep.equal([-3, 3]);
    expect(sumZero([-2, 0, 1, 3])).to.equal(undefined);
    expect(sumZero([1, 2, 3])).to.equal(undefined);
  });

  it('returns an array that includes both values that sum to zero or undefined if a pair does not exist', () => {
    expect(sumZeroWithPointers([-3, -2, -1, 0, 1, 2, 3])).to.deep.equal([-3, 3]);
    expect(sumZeroWithPointers([-2, 0, 1, 3])).to.equal(undefined);
    expect(sumZeroWithPointers([1, 2, 3])).to.equal(undefined);
  });

  it('counts the unique values in the array', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).to.equal(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).to.equal(7);
    expect(countUniqueValues([])).to.equal(0);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).to.equal(4);
  });
});
