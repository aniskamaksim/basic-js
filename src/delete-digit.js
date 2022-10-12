const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(number) {
  let numberString = number.toString();
  let maximum = 0;
  for (let i = 0; i < numberString.length; i++) {
    let currentSubValue = +(numberString.replaceAt(i, ""));
    console.log(currentSubValue)
    if (currentSubValue > maximum) {
      maximum = currentSubValue;
      console.log(maximum)
    }
  }
  return maximum;
}
String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

module.exports = {
  deleteDigit
};
