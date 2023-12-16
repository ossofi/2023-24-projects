/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let newArr = arr;
  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] % 2 !== 0) {
      newArr.splice(i + 1, 0, 100);
    } else {
    }
  }
  return newArr;
};
