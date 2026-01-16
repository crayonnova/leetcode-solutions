// @leet start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;

  for (let i = arr.length; i > -1; i--) {
    if (i % 2 != 0) {
      let start = 0;
      let end = i - 1;

      while (end < arr.length) {
        for (let k = start; k <= end; k++) {
          result += arr[k];
        }

        start++;
        end++;
      }
    }
  }

  return result;
};
// @leet end
