// @leet start
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const score = (rolls) => {
    let total = 0;
    for (let i = 0; i < rolls.length; i++) {
      const doubled = rolls[i - 1] === 10 || rolls[i - 2] === 10;
      total += doubled ? rolls[i] * 2 : rolls[i];
    }
    return total;
  };

  const first = score(player1);
  const second = score(player2);

  if (first === second) return 0;
  return first > second ? 1 : 2;
};
// @leet end
