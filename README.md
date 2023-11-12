# How to setup environment for EPAM EHU Tasks

Hey there! That's a repository related to JS/TS Course in EHU. Please carefully read all the instructions below.

**Happy coding :innocent:**

## Installation

### Git

Please install Git on your local machine https://git-scm.com/download

Verify it's done:
- In console type `git --version`
- If you see smth like `git version 2.29.2.windows.2` you're done

### NVM

**NVM is a tool allowing you to have multiple Node.js & NPM versions installed on your machine. We're highly recommend using that.**

1. Clean-up all previous Node.js and NPM installations
2. Download and install NVM
   1. Windows: https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe, download and execute
   2. MacOS:
    - open terminal Applications -> Utilites -> Terminal.app
    - run command `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
    - reboot terminal and try to type `nvm -v`
    - in case there is nvm: command not found run follow code
     ` export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
    - try to run `nvm -v` once again
    tutorial: https://github.com/nvm-sh/nvm
   3. Linux https://github.com/nvm-sh/nvm
3. In console run `nvm install 16.17.0` to install Node.js 16.17.0 (NPM included)
4. In console run `nvm use 16.17.0` to active Nodej.s 16.17.0 as current Node.js version
5. In console run `nvm current` to verify Node.js 16.17.0 is current activated version. If you see `v16.17.0` in console, then you're fine
6. In console run `node --version` to print current Node.js version. If you see `v16.17.0` in console, then you're fine

### Configuring SSH

We're highly recommend to configure SSH key for your machine (Windows/MacOS/Linux/etc) and put it into your Gitlab account.

Follow this instruction to complete that step: https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-configure-GitLab-SSH-keys-for-secure-Git-connections

#### MacOs tips
you can get your public key by run in terminal `cat ~/.ssh/id_rsa.pub`

### Authenticate into Autocode

[Autocode](https://autocode-next.lab.epam.com/) is an educational platform that hosts practice-oriented programming courses and provides an automated way to grade coding assignments. Each student's solution submitted to Autocode from a remote Git repository receives fast feedback from industry-recognized test execution and static code analysis tools. The platform allows students not only to strengthen their coding skills but also get familiar with modern production build tools and version control systems.

- **Please register and login into Autocode using your Gitlab authorisation (your Gitlab account created here https://autocode.git.epam.com/ and bind to your Student EHU GMAIL account)** 
- On Autocode please click on your name in top right corner ---> select Profile ---> Click on Autorize button near autocode.git.epam.com section to link your gitlab account to your profile
- If blue Authorize button is now red with Deauthorize label - you're done

### Enroll into JS/TS Course

- On Autocode click on Explore button in black navigation bar in the top panel
- Find and click `[EHU] JS/TS Course` (here's [a direct link](https://autocode-next.lab.epam.com/courses/1541))
- On top right corner click on blue button `Enroll`
- Inform your teacher to approve your enrollment
- After your teacher's done, refresh the page
- If you see `My enrollment` bold label, `Included` status with a blue bullet and `Leave course` red button in the top right corner, then you're done

### Cloning tasks repository into your Gitlab account

- Navigate to [[EHU] JS/TS Course](https://autocode-next.lab.epam.com/courses/1541)
- Open `Syllabus` tab
- Open desired module (i.e `01 Environment setup`, `04 Function`, etc)
- Open desired task (i.e `Environment Setup`)
- **Verify you see: Autorized Gitlab account: your_gitlab_name**. If not, then click on Autorize button
- Click on Fork repository button

**From now in your Gitlab Account there is a repository called YouNameSurname / Practical Tasks. That your main repostiry for practice. Now please clone into your local machine (the next step below)**

### Cloning your repository with tasks into your local machine

1. In Gitlab navigate to your repositories, click on **Practical Tasks** repository and click on blue button `Clone`.
2. In dropdown find section **Clone with SSH** and copy that url git@autocode.git.epam.com:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@gitlab...js-ts-tasks.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd js-ts-tasks` and click Enter
6. Now you should be in a folder `js-ts-tasks`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Gitlab profile) and Surname is your Surname (same as on Gitlab profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@student.ehu.lt` where `youremailaddress@student.ehu.lt` is your address you used to register on Gitlab (the same as on Gitlab profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address

### Install JavaScript packages

After you've cloned repository onto your local machine, you need to install necessary JavaScript packages.
1. In console navigate to the folder where you cloned you repository to (`cd js-ts-tasks`)
2. Now you should be in a folder `js-ts-tasks`
3. In console type in the command `npm install` and click Enter
4. Wait for packages to be installed
5. In console type in `dir` on Windows or `ls` on MacOS, click Enter and verify there's a folder named `node_modules` exists
6. It it's so, you're done

### Configuring VSCode IDE

1. Install ESLint extention `Ctrl/Cmd +Shift + X` then type in search string eslint and select one
2. Install Prettier extention the same way
3. Configure IDE for autoformat on file save `Ctrl/Cmd +Shift + P`
   type in search string - `settings`
   select Preferences: Open User Settings (JSON)
   replace with `
   {
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.codeActionsOnSave": {
            "source.fixAll": true
        },
        "editor.formatOnSave": true
    }
}`

### Rules for commit

Please follow these rules to give a proper name to your commits.

Commit message common pattern: `{feat|fix}(ESDU-{taskNumber}): {body of a commit message}`

If you're adding a new code/solution/etc, please consider that as `feat` - feature. {taskNumber} - that's your module number (01 - for environment setup, 02 - for data types, etc). For example:
```
feat(ESDU-02): add data types solution
feat(ESDU-06): add solution passing half tests
feat(ESDU-02): add data types final solution
```

If you're fixin some issue for already pushed code/solution/etc, please consider that as `fix` - a bugfix or just a fix. {taskNumber} - that's your module number (01 - for environment setup, 02 - for data types, etc). For example:
```
fix(ESDU-05): fix sum function params naming
fix(ESDU-11): fix lint issues
fix(ESDU-07): fix
```

## Tasks

We are using different branches for your tasks and instructions

```
master - used for general repository instructions
```

Each branch starting with `tasks/...` contains a set of tasks dedicated to the lecture module.

```
tasks/01-environment-setup
tasks/02-data-types-values-operators
...
```

## How to get new tasks into your repository

### One-time installation step

Please add remote branch linking into your local git

#### Console

To do this, please in console run commands
```
git remote rm upstream

git remote add upstream git@autocode.git.epam.com:esde-js-ts/js-ts-tasks.git
```

#### Visual Studio Code

In Source Control menu click on three dots -> Remote -> Add remote -> Paste git@autocode.git.epam.com:esde-js-ts/js-ts-tasks.git -> Enter upstream

**NOTE** You might need to remove previously created upstream. In Source Control menu click on three dots -> Remote -> Remove remote -> upstream.

### How to start solving new tasks (get new branches into your Git)

#### Console

When the linking is created (see instructions above), run command `git fetch upstream` to get a new branch with tasks.

Type `git branch -a` to ensure you see in a list lines like `remotes/upstream/tasks-...`.

Assuming the new branch (with new tasks you haven't solved yet) is `tasks-02-simple-tasks`.

Type `git switch tasks-02-simple-tasks`. If you see two messages

```
Branch 'tasks-02-simple-tasks' set up to track remote branch 'tasks-02-simple-tasks' from 'upstream'
Switched to a new branch 'tasks-02-simple-tasks'
```

Then you did it correctly.

Now the next step is to publish that branch into your Git repositry (origin). Run command `git push -u origin`. You should see a list of messages containing that line:

```
...
To gitlab.com:YOUR_NAME/js-ts-tasks.git
* [new branch]     tasks-02-simple-tasks -> tasks-02-simple-tasks
...
```

You're done, now you could write solutions for your task.

#### Visual Studio Code

Now when the linking is created, In Source Control menu click on three dots -> Pull, Push -> Fetch From All Remotes menu item to get a new branch with tasks.

Then checkout/switch to that branch (`upstream/tasks-...`)

Now you could create your solution locally.

To prepare for Autocode submit please push your local branch into your repository. In Source Control menu click on three dots -> Pull, Push -> Push to... -> Select **origin  (not upstream)**

### How to get tasks updates

#### Console

Sometimes there are improvements in already published tasks. To get new changes from upstream repository you should use `git pull` command.

For example, let's assume there are some updated in `upstream/tasks-02-simple-tasks` branch. Run in console `git pull upstream tasks-02-simple-tasks` to pull recent changes from remote branch into your local repository.

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution

## How to submit solution to Autocode

- Navigate to [[EHU] JS/TS Course](https://autocode-next.lab.epam.com/courses/1541)
- Open `Syllabus` tab
- Open desired module (i.e `01 Environment setup`, `04 Function`, etc)
- Open desired task (i.e `Environment Setup`)
- **Verify you see: Autorized Gitlab account: your_gitlab_name**. If not, then click on Autorize button
- Click on **Submit solution** button to submit your attemp to Autocode. It will build, compile and test your solution from the repository and branch you've provided. **_If there are any issues, please double check branch name and repository address are correct_**
- You could see solution attempt results by clicking on it. **Please submit to Autocode only solutions you're sure in. You have only few attempts to submit your solution. All test runs should be done locally on your machine**.
