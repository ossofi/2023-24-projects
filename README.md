# Tasks: 05 Context

## Task description

Here are several simple tasks. Each of them is located in their own js files.

### sort.js

Write a function that returns a function that will sort all it's arguments in an order being specified by sortNumbersComparator function from TestUtils object

**Note**: You MUST use a function sortComparator from TestUtils object

**Note**: DON'T require/import TestUtils from a test/testUtils

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `sort(TestUtils)(1, 2, 5, 3, 4)` | `[5, 4, 3, 2, 1]` | Please check test/testUtils file and sortComparator function for comparator function details. In current implementation numbers are being sorted in decreasing order |
| `sort(TestUtils)("Steve", "Ada", "Jane", "Jene")` | `["Steve", "Jene", "Jane", "Ada"]` | Please check test/testUtils file and sortComparator function for comparator function details. In current implementation strings are being sorted in decreasing order by using localeCompare function |

### payments.js

Write a function that returns a function calculating how much money will a person have after all income/debts calculation

`income` is an Object that may look like:

```js
{
  salary: 100, // person's salary
  investment: 200 // person's income he gets from investment activities
}
```

`debts` is an Object that may look like:

```js
{
    rent: 50, // how much a person should pay for renting a flat/house/etc
    food: 25 // how much a person will spend on food
}
```

At the end after calculation all person's money we will have: 100 + 200 - 50 - 25 = 225, that's a final answer

**Note**: You **MUST** use a function sumAllObjectProperties from TestUtils object that will calculate all object numeric properties

**Note**: DON'T require/import TestUtils from a test/testUtils

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `payments(TestUtils)({ "salary": 500, "business": 100, "investment": 400 }, { "taxes": 100, "education": 200 })` | `700` | 500 + 100 + 400 - 100 - 200 = 700 |

### palindrome.js

Write a function that returns a function that
1. converts all uppercase letters into lowercase letters
2. removes all non-alphanumeric characters
3. returns a result of a calling isPalindrome function from TestUtils object

**Note**: Alphanumeric characters include letters and numbers.

**Note**: You MUST call isPalindrome function from TestUtils object

**Note**: DON'T require/import TestUtils from a test/testUtils

_Original task: https://leetcode.com/problems/valid-palindrome/_

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `palindrome(TestUtils)("A man, a plan, a canal: Panama")` | `true` | "amanaplanacanalpanama" is a palindrome. |
| `palindrome(TestUtils)("race a car")` | `false` | "raceacar" is not a palindrome. |
| `palindrome(TestUtils)(" ")` | `true` | s is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome. |

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution

## How to submit solution to Autocode

- For HR Students: Navigate to [[EHU] JS/TS HR 2023](https://autocode-next.lab.epam.com/courses/1541)
- For LR Students: Navigate to [[EHU] JS/TS HR 2023](https://autocode-next.lab.epam.com/courses/1544)
- Open `Syllabus` tab
- Open desired module (i.e `01 Environment setup`, `04 Function`, etc)
- Open desired task (i.e `Environment Setup`)
- **Verify you see: Autorized Gitlab account: your_gitlab_name**. If not, then click on Autorize button
- Click on **Submit solution** button to submit your attemp to Autocode. It will build, compile and test your solution from the repository and branch you've provided. **_If there are any issues, please double check branch name and repository address are correct_**
- You could see solution attempt results by clicking on it. **Please submit to Autocode only solutions you're sure in. You have only few attempts to submit your solution. All test runs should be done locally on your machine**.
