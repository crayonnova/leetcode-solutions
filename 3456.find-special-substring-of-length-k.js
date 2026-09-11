// @leet start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
  let runLength = 0;

  for (let i = 0; i < s.length; i++) {
    runLength = i > 0 && s[i] === s[i - 1] ? runLength + 1 : 1;

    const isRunEnd = i === s.length - 1 || s[i] !== s[i + 1];
    if (isRunEnd && runLength === k) return true;
  }

  return false;
};
// @leet end
