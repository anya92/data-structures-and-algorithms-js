const expect = require('chai').expect;

const { maxSubarraySum, maxSubarraySumWithSlidingWindow } = require('./slidingWindow');

describe('Sliding WIndow Pattern', () => {
  it('calculate the maximum sum of n consecutive elements in the array', () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).to.equal(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).to.equal(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).to.equal(6);
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).to.equal(13);
    expect(maxSubarraySum([], 4)).to.equal(null);
  });

  it('calculate the maximum sum of n consecutive elements in the array', () => {
    expect(maxSubarraySumWithSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)).to.equal(10);
    expect(maxSubarraySumWithSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)).to.equal(17);
    expect(maxSubarraySumWithSlidingWindow([4, 2, 1, 6], 1)).to.equal(6);
    expect(maxSubarraySumWithSlidingWindow([4, 2, 1, 6, 2], 4)).to.equal(13);
    expect(maxSubarraySumWithSlidingWindow([], 4)).to.equal(null);
  });
});
