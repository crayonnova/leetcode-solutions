// @leet start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  const popcount = (x) => {
    let count = 0;
    while (x) {
      x &= x - 1;
      count++;
    }
    return count;
  };

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (popcount(i) === k) sum += nums[i];
  }
  return sum;
};
// @leet end
