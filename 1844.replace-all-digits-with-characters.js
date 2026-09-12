// @leet start
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const chars = s.split("");

  for (let i = 1; i < chars.length; i += 2) {
    const base = chars[i - 1].charCodeAt(0);
    const shift = Number(chars[i]);
    chars[i] = String.fromCharCode(base + shift);
  }

  return chars.join("");
};
// @leet end
