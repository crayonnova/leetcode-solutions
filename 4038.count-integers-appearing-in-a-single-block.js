// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
  const runs = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      runs.set(nums[i], (runs.get(nums[i]) ?? 0) + 1);
    }
  }

  let special = 0;
  for (const count of runs.values()) {
    if (count === 1) special++;
  }
  return special;
};

// @leet end
