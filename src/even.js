/**
 * Print "EVEN" or "ODD" if a number is even or odd
 * @param {number} num - -100000 < n < 100000
 * @returns {string}
 */
module.exports.even = function even(num) {
  return num % 2 === 0 ? 'EVEN' : 'ODD';
};
