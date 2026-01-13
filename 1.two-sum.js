// @leet start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const finding = target - nums[i];
    if (dict[finding] != undefined) {
      return [dict[finding], i];
    }

    dict[nums[i]] = i;
  }
};
// @leet end
