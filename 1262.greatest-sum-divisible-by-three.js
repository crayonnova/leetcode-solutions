// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const a = nums[i], b = nums[j], c = nums[k];
        const sum = (a + b + c) % 3;
        if (sum) {
          result = Math.max(result, a + b + c);
        }
      }
    }
  }
  return result;
};
// @leet end
