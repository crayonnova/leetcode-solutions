// @leet start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const even_array = [], odd_array = [];

  for (let [index, num] of nums.entries()) {
    (index % 2 ? odd_array : even_array).push(num);
  }

  even_array.sort((a, b) => a - b);
  odd_array.sort((a, b) => b - a);

  let ei = 0, oi = 0;
  return nums.map((_, index) => (index % 2 ? odd_array[oi++] : even_array[ei++]));
};
// @leet end
