/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  let res;
  if (firstNumber > secondNumber) {
    res = '>';
  }
  if (firstNumber < secondNumber) {
    res = '<';
  }
  if (firstNumber === secondNumber) {
    res = '=';
  }
  return res;
};
