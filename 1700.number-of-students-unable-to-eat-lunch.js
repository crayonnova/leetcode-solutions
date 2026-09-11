// @leet start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const waiting = [0, 0];
  for (const preference of students) waiting[preference]++;

  for (let i = 0; i < sandwiches.length; i++) {
    const top = sandwiches[i];
    if (waiting[top] === 0) return waiting[0] + waiting[1];
    waiting[top]--;
  }

  return 0;
};
// @leet end
