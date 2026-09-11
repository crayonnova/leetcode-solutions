// @leet start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  // A scores +1, B scores -1; a line hitting ±3 means that player owns it.
  const rows = [0, 0, 0];
  const cols = [0, 0, 0];
  let diag = 0;
  let anti = 0;

  for (let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i];
    const point = i % 2 === 0 ? 1 : -1;

    rows[r] += point;
    cols[c] += point;
    if (r === c) diag += point;
    if (r + c === 2) anti += point;

    if (
      Math.abs(rows[r]) === 3 ||
      Math.abs(cols[c]) === 3 ||
      Math.abs(diag) === 3 ||
      Math.abs(anti) === 3
    ) {
      return point === 1 ? "A" : "B";
    }
  }

  return moves.length === 9 ? "Draw" : "Pending";
};
// @leet end
