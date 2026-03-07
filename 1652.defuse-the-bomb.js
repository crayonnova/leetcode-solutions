// @leet start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  return code.map((num, index) => {
    if (k == 0) return 0;

    let sum = 0;
    let counter = 0;


    while (counter < Math.abs(k)) {
      const indexCounter = (k > 0) ? index + counter + 1 : index - counter - 1;
      const nextIndex = ((indexCounter % code.length) + code.length) % code.length;
      sum += code[nextIndex];
      counter++;
    }

    return sum;
  });
};
// @leet end
