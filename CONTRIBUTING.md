# Contributing

First of all, thank for your interest in helping out! We really apreciate it.

Here is how you go about contributing to this repo:

## Rules

- Be nice
- Be Cool
- If possible, be excelent!

## Submitting code

- Clone or fork this repo
- Submit a PR
  - Follow the PR template as well as you can, fill out all the info.
- Wait and/or go work on something else while we verify it!

## Code Quality Tools

We have some automated checks/code quality tools in place to help you write code that is compliant with our styling with no hassle.

- ESLint and Prettier with pretty standard configs are setup
  - There is a pre-commit lint-staged hook that will verify if your code complies with our style guide before you can commit, saving you some time (and saving us some CI money)
  - This hook will also run any tests related to whatever you just changed.
  - Our CI will also perform these checks, just to be double sure...
- We use an automated [semantic-release](https://github.com/semantic-release/semantic-release) setup, therefore we must keep our commit messages in the same format.
  - You can se whatever conventional-commits setup you want (like commitizen or VSCode addons).
  - Feel free to add gitmojis as well.
  - For your convenience, we have a commitizen script setup, you can run it with `yarn cz` once you are ready to commit (and your files are all staged).

That's about it. It sounds like a lot, but most of these tools run automatically and you can just write your code in your prefferred manner and they will mostly make it compliant for you, and if not, let you know what you need to change.
