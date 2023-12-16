/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let longestSub = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let substr = '';
      while (i < str1.length && j < str2.length && str1[i] === str2[j]) {
        substr += str1[i];
        i++;
        j++;
      }

      if (substr.length > longestSub.length) {
        longestSub = substr;
      }
    }
  }
  return longestSub;
};
