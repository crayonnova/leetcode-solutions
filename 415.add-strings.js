// @leet start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  function* genInt(num) {
    for (let i = num.length - 1; i > -1; i--) {
      yield +num[i];
    }
  }

  let out = "";
  let carry = 0;

  const g1 = genInt(num1);
  const g2 = genInt(num2);

  while (true) {
    const x = g1.next();
    const y = g2.next();
    if (x.done && y.done && carry == 0) break;

    const sum = (x.done ? 0 : x.value) + (y.done ? 0 : y.value) + carry;
    out = (sum % 10) + out;
    carry = sum >= 10 ? 1 : 0;
  }

  return out || "0";
};
// @leet end
