const expect = require('chai').expect;

const {
  sameFrequency,
  areThereDuplicates,
  areThereDuplicates2,
  areThereDuplicates3,
  averagePair,
} = require('./challenges');

describe('Challenges', () => {

  it('sameFrequency function checks if the two numbers have the same frequency of digits', () => {
    expect(sameFrequency(12, 21)).to.equal(true);
    expect(sameFrequency(720043, 300472)).to.equal(true);
    expect(sameFrequency(121, 21)).to.equal(false);
    expect(sameFrequency(12, 211)).to.equal(false);
    expect(sameFrequency(66827, 66276)).to.equal(false);
  });

  it('function areThereDuplicates', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).to.equal(true);
    expect(areThereDuplicates('a', 'b', 'c', 'd')).to.equal(false);

    expect(areThereDuplicates2('a', 'b', 'c', 'a')).to.equal(true);
    expect(areThereDuplicates2('a', 'b', 'c', 'd')).to.equal(false);

    expect(areThereDuplicates3('a', 'b', 'c', 'a')).to.equal(true);
    expect(areThereDuplicates3('a', 'b', 'c', 'd')).to.equal(false);
  });

  it('averagePair', () => {
    expect(averagePair([1, 2, 3], 2.5)).to.equal(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).to.equal(true);
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).to.equal(false);
    expect(averagePair([], 4)).to.equal(false);
  });

})
