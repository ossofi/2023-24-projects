/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const allElems = arr;
  const uniqueElem = [];
  for (let i = 0; i < allElems.length; i++) {
    if (!uniqueElem.includes(arr[i])) {
      uniqueElem.push(arr[i]);
    }
  }
  const numOfUniqueElem = uniqueElem.length;
  return numOfUniqueElem;
};
