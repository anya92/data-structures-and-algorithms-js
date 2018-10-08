const expect = require('chai').expect;

const { search } = require('./divideAndConquer');

describe('Divide and Conquer Pattern', () => {
  expect(search([1, 2, 3, 4, 5, 6], 4)).to.equal(3);
  expect(search([1, 2, 3, 4, 5, 6], 6)).to.equal(5);
  expect(search([1, 2, 3, 4, 5, 6], 11)).to.equal(-1);
});
