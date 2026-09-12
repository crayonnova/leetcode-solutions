// @leet start
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    const roundedAmount = Math.round(purchaseAmount / 10) * 10;
    return 100 - roundedAmount;
};
// @leet end