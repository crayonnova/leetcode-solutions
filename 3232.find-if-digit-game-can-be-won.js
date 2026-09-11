// @leet start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let single = 0;
  let double = 0;

  for (let num of nums) {
    if (num < 10) {
      single += num;
    } else {
      double += num;
    }
  }

  return single != double;
};
// @leet end
