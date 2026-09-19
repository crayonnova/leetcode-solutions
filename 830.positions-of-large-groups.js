// @leet start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let left = 0;

  for (let right = 1; right <= s.length; right++) {
    if (s[right] !== s[right - 1]) {
      if (right - left >= 3) {
        result.push([left, right - 1]);
      }
      left = right;
    }
  }

  return result;
};
// @leet end
