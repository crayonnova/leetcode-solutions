// @leet start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  cost.sort((a, b) => a - b);
  let total = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    if ((cost.length - 1 - i) % 3 !== 2) total += cost[i];
  }
  return total;
};
// @leet end
