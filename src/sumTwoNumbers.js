/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = String(firstNumber);
  secondNumber = String(secondNumber);
  if (firstNumber.includes(' ')) {
    firstNumber = firstNumber.replaceAll(' ', '');
  }
  if (secondNumber.includes(' ')) {
    secondNumber = secondNumber.replaceAll(' ', '');
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  return firstNumber + secondNumber;
};
