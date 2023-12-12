const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  console.log(n);

  const onlyLettesOrNumbers = n.split("-").join("");
  console.log(onlyLettesOrNumbers);

  if (
    n[2] !== "-" ||
    n[5] !== "-" ||
    n[8] !== "-" ||
    n[11] !== "-" ||
    n[14] !== "-"
  ) {
    return false;
  }

  for (let i = 0; i < onlyLettesOrNumbers.length; i++) {
    if (
      Number.isNaN(+onlyLettesOrNumbers[i]) &&
      (onlyLettesOrNumbers[i] < "A" || onlyLettesOrNumbers[i] > "F")
    ) {
      return false;
    } else {
      if (+onlyLettesOrNumbers[i] < 0 || +onlyLettesOrNumbers[i] > 9) {
      }
    }
  }

  return true;
}
module.exports = {
  isMAC48Address,
};
