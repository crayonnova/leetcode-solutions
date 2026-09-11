// @leet start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const tempBoard = board.map(row => [...row]);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const DIRS = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
      ];
      const count = DIRS.reduce((acc, curr) => {
        let cc = tempBoard[i + curr[0]]?.[j + curr[1]] ? 1 : 0;
        return acc + cc;
      }, 0);

      if (tempBoard[i][j]) {
        if (count < 2) {
          board[i][j] = 0;
        } else if (count == 2 || count == 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      } else {
        if (count === 3) {
          board[i][j] = 1;
        }
      }
    }
  }
};
// @leet end
