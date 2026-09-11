// @leet start
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const n = word.length;
  const full = Math.floor(n / 8);
  const rest = n % 8;

  const rowCostSum = (full * (full + 1)) / 2;
  const fullRowsCost = 8 * rowCostSum;

  const partialRowCost = rest * (full + 1);

  return fullRowsCost + partialRowCost;
};
// @leet end
