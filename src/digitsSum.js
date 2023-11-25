/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let n2 = n * -1;
  if (n >= 0) {
    return n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  } else {
    return n2
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
};
