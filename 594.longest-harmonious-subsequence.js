// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let result = 0;
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.has(num - 1)) {
      result = Math.max((map.get(num) + map.get(num - 1)), result);
    }
    if (map.has(num + 1)) {
      result = Math.max((map.get(num) + map.get(num + 1)), result);
    }
  }

  return result;
};
// @leet end
