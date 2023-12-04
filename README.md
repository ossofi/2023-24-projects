# Tasks: 03 Objects and Arrays

## Task description

Here are several small tasks. Each of them is located in their own js files.

### getDistance.js

Calculate the distance between two points represented on the standard Planar coordinate system
* with precision 2 decimal places
* Each Point represented by object contains two property (X and Y)

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `getDistance({ "X": 1, "Y": 1 }, { "X": 2, "Y": 2 })` | `1.41` |
| `getDistance({ "X": 10, "Y": 10 }, { "X": 20, "Y": 20 })` | `14.14` | [point point length](https://ru.onlinemschool.com/math/library/analytic_geometry/point_point_length/) |

### getMaximalSequence.js

Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `getMaximalSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])` | `[2, 2, 2]` | From 6th array index to 8th included |
| `getMaximalSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 3, 3, 3])` | `[2, 2, 2]` | From 6th array index to 8th included (the first occurrence, the [3, 3, 3] is the second occur. |

### hasProperty.js

Check if an {object} contains property {prop}

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `hasProperty({ "X": 1, "Y": 1 }, "x")` | `false` | The 'x' property is not inside given object (case sensitive) |
| `hasProperty({ "X": 10, "property": 10 }, "property")` | `true` | The 'property' is inside given object |
| `hasProperty({ "X": 0, "Y": 0 }, "nothing")` | `false` | The 'nothing' property is not inside given object |

### removeItems.js

Write a function which removes from given array items are equal a given value

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `removeItems([1, 3, 456, 78, 2, 2, 4], 2)` | [1, 3, 456, 78, 4] | All array's values equal to 2 have been removed |
| `removeItems([1, 3, 456, 78, 2, 2, 4], "hello")` | [1, 3, 456, 78, 2, 2, 4] | Nothing to remove, there is no 'hello' in the provided array |

### partialSum.js

Write a function which from the given array creates a new array where each array item defines the sum of elements from 0 index up to i-th index (included)

Example: given array [0, 1, 2, 3, 4]

The correct answer is [0, 1, 3, 6, 10] where:
* 0 - sum from indexes 0 to 0 (0)
* 1 - sum from indexes 0 to 1 (0 + 1 = 1)
* 3 - sum from indexes 0 to 2 (0 + 1 + 2 = 3)
* 6 - sum from indexes 0 to 3 (0 + 1 + 2 + 3 = 6)
* 10 - sum from indexes 0 to 4 (0 + 1 + 2 + 3 + 4 = 10)

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `partialSum([0, 1, 2, 3, 4])` | [0, 1, 3, 6, 10] |  |
| `partialSum([0, 1, 0, 2, 0, 3])` | [0, 1, 1, 3, 3, 6] | |

### hundredAfterOdd

Write a function which inside given array of numbers puts a number `100` after each odd number.

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `hundredAfterOdd([1, 3, 456, 78, 2, 777125, 4])` | [1, 100, 3, 100, 456, 78, 2, 777125, 100, 4] | Odd numbers: 1, 3, 777125 |
| `hundredAfterOdd([-1, -5, 1, 5])` | [-1, 100, -5, 100, 1, 100, 5, 100] | All number are odd |

### diffElems

Write a function which inside given array of numbers counts amount of different elements.

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `diffElems([1, 3, 6, 1, 5, 1, 1])` | 4 | Different numbers are 1, 3, 6, 5 |
| `diffElems([0, 0, 0, 0])` | 1 | Different number is only 0 |

### maxCommonSub

Write a function which finds a maximal common substring of two given strings.

#### Test cases

| Input | Expected Output | Explanation |
| --- | --- | --- |
| `maxCommonSub('abcd', 'bcg')` | 'bc' | 'bc' string is a substring for both strings and its length is maximal ('b' and 'c' and also substrings but their lengths is 1) |
| `maxCommonSub('qweeetyiyiyi', 'vmeetyop')` | 'eety' |  |

## How to run tasks locally

The following commands are useful to run your code locally

### Run all tasks at once

`npm run test:local` - iterates throught all `src/*.js` files and test your solutions

### Run a certain task

You could specify a name of each individual task to run that locally

`npm run test:local:backToFront` - run test cases only for `backToFront` task
`npm run test:local:sum` - run test cases only for `sum` task

A list of available commands is specified in `package.json` file in `scripts` section

## Commit message rules

Please follow `Commit message rules` instructions provided on `main` branch.

## How to submit solution to Autocode

[Autocode](https://autocode-next.lab.epam.com/) is an educational platform that hosts practice-oriented programming courses and provides an automated way to grade coding assignments. Each student's solution submitted to Autocode from a remote Git repository receives fast feedback from industry-recognized test execution and static code analysis tools. The platform allows students not only to strengthen their coding skills but also get familiar with modern production build tools and version control systems.

### Authenticate into Autocode

- **Please register and login into Autocode using your Gitlab authorisation (your Gitab account)**
- On Autocode please click on your name in top right corner ---> select Profile ---> Click on Autorize button near gitlab.com section to link your gitlab account to your profile
- If blue Authorize button is now red with Deauthorize label - you're done

### Enroll into JS/TS Course if it's not done yet

- On Autocode click on Explore button in black navigation bar in the top panel
- For HR Students: Find and click [[EHU] JS/TS HR 2023](https://autocode-next.lab.epam.com/courses/1541)
- For LR Students: Find and click [[EHU] JS/TS HR 2023](https://autocode-next.lab.epam.com/courses/1544)
- On top right corner click on blue button `Enroll`
- Inform your trainer (Andrei/Aliaksandr) to approve your enrollment
- After they're done, refresh the page
- If you see `My enrollment` bold label, `Included` status with a blue bullet and `Leave course` red button in the top right corner, then you're done

## How to submit solution to Autocode

- For HR Students: Navigate to [[EHU] JS/TS HR 2023](https://autocode-next.lab.epam.com/courses/1541)
- For LR Students: Navigate to [[EHU] JS/TS HR 2023](https://autocode-next.lab.epam.com/courses/1544)
- Open `Syllabus` tab
- Open desired module (i.e `01 Environment setup`, `04 Function`, etc)
- Open desired task (i.e `Environment Setup`)
- **Verify you see: Autorized Gitlab account: your_gitlab_name**. If not, then click on Autorize button
- Click on **Submit solution** button to submit your attemp to Autocode. It will build, compile and test your solution from the repository and branch you've provided. **_If there are any issues, please double check branch name and repository address are correct_**
- You could see solution attempt results by clicking on it. **Please submit to Autocode only solutions you're sure in. You have only few attempts to submit your solution. All test runs should be done locally on your machine**.
