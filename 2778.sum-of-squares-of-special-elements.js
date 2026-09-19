// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  return nums.reduce((acc, v, i) => {
    return acc + ((nums.length % (i + 1) == 0) ? v * v : 0);
  }, 0);
};
// @leet end
