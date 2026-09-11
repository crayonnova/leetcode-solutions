// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let increase = 1;
  let decrease = 1;

  let left = 0;
  let right = (nums.length > 1) ? 1 : 0;

  let inc = 0;
  let des = 0;

  while (left < nums.length - 1) {

    if (nums[left] < nums[right]) {
      inc++;
      des = 0;
    } else if (nums[left] > nums[right]) {
      des++;
      inc = 0;
    }

    increase = Math.max(inc, increase);
    decrease = Math.max(des, decrease);

    left++;
    right++;
  }

  return Math.max(increase, increase);
};
// @leet end
