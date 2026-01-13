// @leet start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) return s;
  let center = 0.5;
  let result = "";

  function checkPalimdrome(start, end) {

  }

  for (let i = 1; i < s.length; i++) {
    const stepper = (String(center).includes(".5")) ? 0.5 : 1;
    let end = center + stepper;
    let start = end - center;

    while (s[start] && s[end]) {
      let temp = "";
      console.log("  start", start)
      console.log("  end", end)

      for (let j = start; j <= end; j++) {
        temp += s[j];
      }
      console.log(" temp", temp);
      start--;
      end++;
      console.log("  ....")
    }

    center += 0.5;
    console.log("........")
  }
};
// @leet end
