// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let result = -1;
  const set = new Set(nums);

  for (const x of set) {
    if (x > 0 && set.has(-x) && x > result) {
      result = x;
    }
  }

  return result;
};
// @leet end
