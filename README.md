# Tasks: 01 Basic Operators

## Task description

Here are several small tasks. Each of them is located in their own js files.

### evalExpr.js

Given k (number). Evaluate the expression: 4 \* (2k - 1)

### volumeCone.js

Given height h and radius r of a cone. Evaluate [volume of a cone](https://www.cuemath.com/measurement/volume-of-cone/).

### divider.js

Given number n and number k. Find the whole part and the remainder of the integer division of n by k. Return a string formatted "wholePart remainder" with one space symbol between two wholePart number and remainder number.

### digitsSum.js

Given number n (0 <= n <= 1000000). Create a function that counts sum of all digits

### backToFront.js

Copy and paste defined amount of a string's symbols to the front and back of a string

### compareSalary.js

Compare three salaries and find the difference between the max and the min

### compareTwoNumbers.js

Compare two numbers and output a string ">" if the first the greater than the second, "=" if they are equal or required math operator otherwise. All possible strings: "<", ">", "=", "<=", ">="

### sumInRange.js

Find a sum in a range of consecutive numbers

### sumTwoNumbers.js

Find a sum of two numbers

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
- Find and click `[EHU] JS/TS Course` (here's [a direct link](https://autocode-next.lab.epam.com/courses/1541))
- On top right corner click on blue button `Enroll`
- Inform your trainer (Andrei/Aliaksandr) to approve your enrollment
- After they're done, refresh the page
- If you see `My enrollment` bold label, `Included` status with a blue bullet and `Leave course` red button in the top right corner, then you're done

### How to submit task solution into Autocode

- Navigate to [[EHU] JS/TS Course](https://autocode-next.lab.epam.com/courses/1541)
- Open `Syllabus` tab
- Open desired module (i.e `01 Environment setup`, `04 Function`, etc)
- Open desired task (i.e `Environment Setup`)
- **Verify you see: Autorized Gitlab account: your_gitlab_name**. If not, then click on Autorize button
- Click on **Submit solution** button to submit your attemp to Autocode. It will build, compile and test your solution from the repository and branch you've provided. **_If there are any issues, please double check branch name and repository address are correct_**
- You could see solution attempt results by clicking on it. **Please submit to Autocode only solutions you're sure in. You have only few attempts to submit your solution. All test runs should be done locally on your machine**.
