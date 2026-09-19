// @leet start
/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  const { sum, product } = n.toString().split("").reduce((acc, curr) => ({ sum: acc.sum + +curr, product: acc.product * +curr }), { sum: 0, product: 1 });
  return (n % (sum + product) == 0);
};
// @leet end
