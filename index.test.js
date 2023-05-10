const { findPairs } = require('./index');

describe('excecute findPairs', () => {
  it('returns pairs of integers that sum to a given value', () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetNum = 12;
    const expectedPairs = [[0, 12], [5, 7], [-4, 16]];
    const pairs = findPairs(numbers, targetNum);
    expectedPairs(pairs).toEqual(expect.arrayContaining(expectedPairs));
  })

  it('returns an empty array if no pairs are found', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 0;
    const expectedPairs = [];
    const pairs = findPairs(numbers, targetSum);
    expect(pairs).toEqual(expectedPairs);
  });

  it('works with negative numbers', () => {
    const numbers = [-1, -2, 3, 4, 5];
    const targetSum = 2;
    const expectedPairs = [[-1, 3]];
    const pairs = findPairs(numbers, targetSum);
    expect(pairs).toEqual(expect.arrayContaining(expectedPairs));
  });
})