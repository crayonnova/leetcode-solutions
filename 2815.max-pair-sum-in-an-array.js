// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const best = new Array(10).fill(-1);
  let ans = -1;

  for (const num of nums) {
    let maxDigit = 0;
    for (let n = num; n > 0; n = Math.floor(n / 10)) {
      maxDigit = Math.max(maxDigit, n % 10);
    }

    if (best[maxDigit] !== -1) {
      ans = Math.max(ans, best[maxDigit] + num);
    }
    best[maxDigit] = Math.max(best[maxDigit], num);
  }

  return ans;
};
// @leet end
