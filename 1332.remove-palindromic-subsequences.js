// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  if (s.length === 0) return 0;

  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return 2;
    left++;
    right--;
  }
  return 1;

};
// @leet end
