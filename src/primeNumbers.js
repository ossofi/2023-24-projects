/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
      if (num < 2) {
        return false;
      }
    }
    return true;
  }

  return function getPrimeNum(start, end) {
    const primeNum = [];
    for (let num = start; num <= end && num <= highestNumber; num++) {
      if (isPrime(num)) {
        primeNum.push(num);
      }
    }
    return primeNum;
  };
};
