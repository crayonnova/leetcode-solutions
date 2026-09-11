// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  return String(nums).split(',').map(value => {
    const num = +value;

    if (num > 9) {
      let largest = 0;
      const splitedArray = String(num).split('');
      splitedArray.forEach(n => largest = Math.max(+n, largest));
      return +String(largest).repeat(splitedArray.length);
    }

    return num;
  }).reduce((accu, current) => accu + current, 0);
};
// @leet end
