// @leet start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let result = [];
  const sortedArr = arr.sort((a, b) => a - b);
  let minDist = Infinity;

  sortedArr.forEach(
    (current, currentIndex) => {
      const diff = sortedArr[currentIndex + 1] - current;
      const nextValue = sortedArr[currentIndex + 1];

      if (diff < minDist) {
        result = [[current, nextValue]];
        minDist = diff;
      } else if (diff == minDist) {
        result.push([current, nextValue]);
      }
    }
  );

  return result;
};
// @leet end
