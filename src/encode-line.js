const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";
  let number = 1;
  let symbol = str[0];
  let result = "";
  let temp = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i] === symbol) {
      number++;
    } else {
      temp += number + symbol;
      symbol = str[i];
      number = 1;
    }
  }
  temp += number + symbol;
  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "1") {
      continue;
    }
    result += temp[i];
  }
  return result;
}

module.exports = {
  encodeLine,
};
