import { it, expect } from 'vitest';

import { maxSubarraySum } from './main.mjs';

it('should return 9 for [1, 2, 3, 4, 5] and k = 2', () => {
  expect(maxSubarraySum([1, 2, 3, 4, 5], 2)).toBe(9);
});

it('should return 9 for [2, 1, 5, 1, 3, 2] and k = 3', () => {
  expect(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)).toBe(9);
});

it('should return -3 for [-2, -3, -1, -5] and k = 2', () => {
  expect(maxSubarraySum([-2, -3, -1, -5], 2)).toBe(-3);
});

it('should return 6 for [3, -2, 5, -1] and k = 2', () => {
  expect(maxSubarraySum([3, -2, 5, -1], 2)).toBe(6);
});

it('should return 100 for [100] and k = 1', () => {
  expect(maxSubarraySum([100], 1)).toBe(100);
});

it('should return 0 for [0, 0, 0, 0] and k = 2', () => {
  expect(maxSubarraySum([0, 0, 0, 0], 2)).toBe(0);
});
