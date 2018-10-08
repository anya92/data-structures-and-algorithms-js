const expect = require('chai').expect;

const {
  power,
  factorial,
  productOfArray,
  range,
  fibonacci,
} = require('./recursionChallenges');

describe('Recursion Challenges', () => {
  it('power function', () => {
    expect(power(2, 3)).to.equal(8);
    expect(power(10, 2)).to.equal(100);    
  });

  it('factorial function', () => {
    expect(factorial(5)).to.equal(120);
    expect(factorial(-5)).to.equal(0);
  });

  it('product of array', () => {
    expect(productOfArray([2, 4, 3])).to.equal(24);
    expect(productOfArray([])).to.equal(1);
  });

  it('range', () => {
    expect(range(5)).to.equal(15);
    expect(range(10)).to.equal(55);
  });

  it('fibonacci', () => {
    expect(fibonacci(4)).to.equal(5);
    expect(fibonacci(6)).to.equal(13);
  });

});
