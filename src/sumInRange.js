/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  let num;
  if (start > end) {
    num = start - end + 1;
  } else {
    num = end - start + 1;
  }
  let sum = (num / 2) * (start + end);

  return sum;
};
