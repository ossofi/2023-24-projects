/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  let volume = ((1 / 3) * h * Math.PI * r ** 2).toFixed(2);
  return volume;
};
