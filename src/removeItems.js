/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  // const res = arr.filter(elem => elem !== value);
  // return res;
  return arr.filter(item => {
    if (Array.isArray(item)) {
      return removeItems(item, value).length > 0;
    } else if (typeof item === 'object' && item !== null) {
      return removeItemsFromObj(item, value);
    }
    return item !== value;
  });
};

function removeItemsFromObj(obj, value) {
  for (const key in obj) {
    const item = obj[key];
    if (Array.isArray(item)) {
      obj[key] = removeItems(item, value);
    } else if (typeof item === 'object' && item !== null) {
      removeItemsFromObj(item, value);
    } else if (item === value) {
      delete obj[key];
    }
  }
  return Object.keys(obj).length > 0;
}
