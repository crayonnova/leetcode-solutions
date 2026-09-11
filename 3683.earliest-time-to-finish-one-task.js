// @leet start
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
  let result = 200;

  for (let task of tasks) {
    result = Math.min((task[0] + task[1]), result);
  }

  return result;
};
// @leet end
