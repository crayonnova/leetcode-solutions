// @leet start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;

  return nums.map(value => {
    sum = sum + value;
    return sum;
  });
};
// @leet end
