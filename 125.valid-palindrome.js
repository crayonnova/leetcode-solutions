// @leet start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.trim() == "") return true;
  const sclean = s.toLowerCase().replace(/[^a-zA-Z1-9]/g, '');

  let left = 1;
  let right = sclean.length - 2;

  while (left < right) {
    if (sclean[left] != sclean[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
// @leet end
