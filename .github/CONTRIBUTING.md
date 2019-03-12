# Contributing

Thank you for considering contributing to SAP Fiori Fundamentals. It's people like you that make this such a great tool.

## 1. Where do I go from here?

If you've noticed a bug or have a question, [search the issue tracker](https://github.com/SAP/fundamental/issues) to see if
someone else in the community has already created a ticket. If not, go ahead and
[make one](https://github.com/SAP/fundamental/issues/new/choose)!

## 2. Fork & create a branch

If this is something you think you can fix, then [fork Fundamentals][] and
create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b feature/325-japanese-translation
```

## 3. Did you find a bug?

* **Ensure the bug was not already reported** by [searching all issues](https://github.com/SAP/fundamental/issues).

* If you're unable to find an open issue addressing the problem,
  [open a new one](https://github.com/SAP/fundamental/issues/new/choose). Be sure to include a **title and clear
  description**, as much relevant information as possible, and a **code sample**
  or an **executable test case** demonstrating the expected behavior that is not
  occurring.

* If possible, use the relevant bug report templates to create the issue.

## 4. Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help;
everyone is a beginner at first :smile_cat:


## 5. Run the test framework
Any markup or CSS changes should begin the test framework. The component test framework loads only `core.scss` and individual component `.scss` files. **The HTML created here will be used on the documentation site.**
- Follow seps 2 - 5 under [Download and Installation](https://github.com/SAP/fundamental#download-and-installation) in the `README`
- Run `npm test`
- Go to [localhost:3030](http://localhost:3030)

## 6. Run the documentation
If your update requires changes to the documentation. The docs CSS is compiled from the source SASS.

- Run `gulp`
- Go to [localhost:4000](http://localhost:4000)


## 7. Make a Pull Request

At this point, you should switch back to your master branch and make sure it's
up to date with Fiori Fundamentals' master branch:

```sh
git remote add upstream https://github.com/SAP/fundamental.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout feature/325-japanese-translation
git rebase master
git push --set-upstream origin feature/325-japanese-translation
```

Finally, go to GitHub and [make a Pull Request](https://github.com/SAP/fundamental/pulls) :D

In the subject of the pull request, use "feat:" to denote an enhancement, "fix:" to denote a bug fix, "chore:" for small configuration updates or "docs:" for documentation updates and briefly describe the bug fix or enhancement you're contributing.


## 8. Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code
has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good][git rebasing]
[resources][interactive rebase] but here's the suggested workflow:

```sh
git checkout feature/325-japanese-translation
git pull --rebase upstream master
git push --force-with-lease feature/325-japanese-translation
```

## 9. Merging a PR (maintainers only)

A PR can only be merged into master by a maintainer if:

* It is passing CI.
* It has been approved by at least two maintainers. If it was a maintainer who
  opened the PR, only one extra approval is needed.
* It has no requested changes.
* It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are
met.


## Helpful Resources

* [Make a new issue](https://github.com/SAP/fundamental/issues/new)
* [Search the issue tracker](https://github.com/SAP/fundamental/issues?utf8=✓&q=is%3Aissue)
* [How to Fork Fundamentals](https://help.github.com/articles/fork-a-repo)
* [Make a pull request](https://help.github.com/articles/creating-a-pull-request)
* [git rebasing](http://git-scm.com/book/en/Git-Branching-Rebasing)
* [interactive rebase](https://help.github.com/articles/interactive-rebase)
