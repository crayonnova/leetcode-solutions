// @leet start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let left = 0;
  let right = 1;

  while (left < nums.length - 1) {
    if (nums[left] == nums[right] && Math.abs(nums[left] - nums[right]) <= k) {
      return true;
    }

    if (nums[left] >= k) {
      left++;
    }

    if (nums[right] >= k) {
      right++;
    }
  }

  return false;
};
// @leet end
