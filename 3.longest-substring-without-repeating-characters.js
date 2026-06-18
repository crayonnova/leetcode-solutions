// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0 || s.length == 1) return s.length;

  let longest = 1, l = 0, r = s[1] ? 1 : 0;
  const set = new Set([s[l]]);

  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    } else {
      set.add(s[r]);
      longest = Math.max(longest, r - l + 1);
      r++;
    }
  }

  return longest;
};
// @leet end
