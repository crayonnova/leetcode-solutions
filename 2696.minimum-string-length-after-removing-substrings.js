// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let exclude = 0;
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  for (const [i, v] of Array.from(s).entries()) {
    const currentIndex = letters.findIndex(e => e == v);
  }

  return s.length - exclude;
};
// @leet end
