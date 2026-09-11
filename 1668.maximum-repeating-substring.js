// @leet start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  const n = sequence.length;
  const m = word.length;

  const dp = new Array(n).fill(0);
  let best = 0;

  for (let i = m - 1; i < n; i++) {
    if (sequence.startsWith(word, i - m + 1)) {
      dp[i] = (i - m >= 0 ? dp[i - m] : 0) + 1;
      best = Math.max(best, dp[i]);
    }
  }

  return best;
};
// @leet end
