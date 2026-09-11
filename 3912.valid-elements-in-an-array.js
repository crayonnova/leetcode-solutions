// @leet start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function (nums) {
  const n = nums.length;
  const valid = new Array(n).fill(false);

  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) valid[i] = true;
    max = Math.max(max, nums[i]);
  }

  max = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > max) valid[i] = true;
    max = Math.max(max, nums[i]);
  }

  return nums.filter((_, i) => valid[i]);
};
// @leet end
