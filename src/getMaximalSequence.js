/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxSeq = [];
  let currSeq = [];

  for (let i = 0; i < arr.length; i++) {
    if (currSeq.length === 0 || arr[i] === currSeq[0]) {
      currSeq.push(arr[i]);
    } else {
      if (currSeq.length > maxSeq.length) {
        maxSeq = currSeq;
      }
      currSeq = [arr[i]];
    }
  }

  if (currSeq.length > maxSeq.length) {
    maxSeq = currSeq;
  }

  return maxSeq;
};
