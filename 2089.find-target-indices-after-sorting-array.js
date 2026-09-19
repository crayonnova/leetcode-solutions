// @leet start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  return sorted.reduce((acc, v, i) => (v == target) ? (acc.push(i), acc) : acc, []);
};
// @leet end
