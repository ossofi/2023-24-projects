class User {
  #firstName;
  #secondName;
  #age;
  constructor(_firstName, _secondName, _age) {
    if (!_firstName || !_secondName || !_age) {
      throw new Error('All data must be provided.');
    }

    this.firstName = _firstName;
    this.secondName = _secondName;
    this.age = _age;
  }
  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid data types.');
    }
    this.#firstName = value;
  }

  set secondName(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid data types.');
    }
    this.#secondName = value;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }
  set age(value2) {
    if (typeof value2 !== 'number') {
      throw new Error('Invalid data types.');
    }
    this.#age = value2;
  }
  get age() {
    return this.#age;
  }
  introduce() {
    let message = `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
    return message;
  }
  celebrateBirthday() {
    this.#age += 1;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  let newUser = new User(firstName, secondName, age);
  return newUser;
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(item => module.exports.createUser(item.firstName, item.secondName, item.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  let matchingUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age === age) {
      matchingUsers.push(users[i]);
    }
  }
  return matchingUsers;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.sortComparatorByAge);
  };
};

/**
 * In Array of Users every User under even index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  return users.map((user, index) => {
    if (index % 2 === 0 && typeof user.celebrateBirthday === 'function') {
      user.celebrateBirthday();
    }
    return user;
  });
};
