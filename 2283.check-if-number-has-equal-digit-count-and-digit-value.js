// @leet start
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const counts = new Array(10).fill(0);

  for (const char of num) {
    counts[Number(char)]++;
  }

  for (let i = 0; i < num.length; i++) {
    if (counts[i] !== Number(num[i])) return false;
  }

  return true;
};
// @leet end
