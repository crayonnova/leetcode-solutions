// @leet start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const forward = new Map();
  const backward = new Map();

  for (let i = 0; i < s.length; i++) {
    const from = s[i];
    const to = t[i];

    if (forward.has(from) && forward.get(from) !== to) return false;
    if (backward.has(to) && backward.get(to) !== from) return false;

    forward.set(from, to);
    backward.set(to, from);
  }

  return true;
};
// @leet end
