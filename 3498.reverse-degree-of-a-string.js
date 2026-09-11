// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let degree = 0;

  for (let i = 0; i < s.length; i++) {
    const reversedAlphabetIndex = 123 - s.charCodeAt(i);
    degree += reversedAlphabetIndex * (i + 1);
  }

  return degree;
};
// @leet end
