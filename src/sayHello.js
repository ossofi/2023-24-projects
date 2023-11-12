/**
 * Prints message Hello, {name}! (name = World by default)
 * @param {string} name - to be inserted into final Hello, name! string
 * @returns {string}
 */
module.exports.sayHello = function sayHello(name = 'World') {
  return `Hello, ${name}!`;
};
