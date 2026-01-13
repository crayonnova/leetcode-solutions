// @leet start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const counter = prices[j];
      if (counter <= current) {
        current = current - counter;
        break;
      }
    }

    result.push(current);
  }

  return result;
};
// @leet end
