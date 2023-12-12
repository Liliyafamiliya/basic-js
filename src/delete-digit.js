const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNumber = `${n}`;
  const arr = [];

  for (let i = 0; i < strNumber.length; i++) {
    const firstPart = strNumber.substring(0, i);
    const secondPart = strNumber.substring(i + 1);
    arr.push(+`${firstPart}${secondPart}`);
  }
  arr.sort((a, b) => b - a);
  return arr[0];
}

module.exports = {
  deleteDigit,
};
