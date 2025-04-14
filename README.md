# 🧠 Maximum Sum Subarray

_Given an array of integers and a number `k`, return the maximum sum of a subarray of size `k`._

## ✍️ Your Task

1. Read the problem and requirements carefully
2. Write your implementation in `src/main.mjs`
3. Test your solution with `npm run test`

## 📘 Description

You are given an array of integers and a number `k`.

Your task is to find the maximum possible sum of any subarray of length `k`.

The subarray must consist of **`k` consecutive elements**.

## 📥 Input

- `arr`: an array of integers (`1 <= arr.length <= 10⁵`, elements can be negative)
- `k`: an integer representing the size of the subarray (`1 <= k <= arr.length`)

## 📤 Output

- Returns an integer representing the **maximum sum** of any subarray of length `k`.

## 🛠️ Instructions

1. Open the file `src/main.mjs` and implement the `maxSubarraySum` function.
2. To verify your solution, run the tests in `test/main.test.js` using:

```bash
npm run test
```

✅ Do not modify the test file unless you're adding extra edge cases.

## 💡 Tips

- Avoid recalculating the sum of the entire window every time.
- Aim for a **linear solution: O(n)**.

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

✅ Make sure your implementation is in `src/main.mjs` and your tests in `src/main.test.js`.
