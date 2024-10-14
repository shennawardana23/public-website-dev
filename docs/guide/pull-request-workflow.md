# <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="50"> Collaboration & Review using *Pull Request*

[Back to Home](en-README.md)

This section contains the *Pull Request* process that runs on Arch Public Website Dev, the procedures and agreements that apply.

---

### *Main Cast*

In the *Pull Request* process there are 2 main roles, namely:

- **Reviewer**: *Code reviewer & decision maker* (main developer).
<!-- - **QA**: *Feature/function reviewer*. -->
- **Member**: *Developer* (developer).

![](https://static.pbahotels.com/Assets/images/Hotel/exterior/d62e3d6a1766e1d3c8a7e478bddd78a3cd3f8fae.png)

### *Pull Request Manifesto @ Arch Public Website Dev*

1. There must be no development process in the `master` *branch* - this *branch* only functions to `merge, test & release` stable features
2. Immediately create a *Pull Request* after the *branch* is created and the *remote push* has been carried out.
3. *Pull Request* will be rejected if a conflict is found in the code. Developers must resolve these conflicts and ensure there are no conflicts in *Pull Request*
4. Name *branches* according to mutual agreement (see *Branching* Terms)
5. *Branch* `hotfix` will generate a *Pull Request* to *branch* `master` and *branch* `develop`
6. The main developer should perform the `merge` process on the local repository. Especially for the `develop` branch, it is best to *preserve commit history* by carrying out the `git merge --no-ff` process. For other branches, please `merge & squash` using `git merge --squash`
7. The main developer who has push access to master and develop must set up the application release process and allow it to create a release branch with several additional work requests before merging it into develop. ` and `master`

### Terms of *Branching*

The *branch* name options that can be used are

- **story**/[Ora number] [description]

> For ***Story*** that you feel is too big, break it into smaller *Tasks* and then merge them into *branch* `story` before doing a *Pull Request* to *branch* `develop`

- **task**/[Ora number] [description]
- **improvement**/[Ora number] [description]
- **bug**/[Ora number] [description]
- **hotfix**/[Ora number] [description]

**Notes**

For repositories that will not undergo much development (one and done), please use the following branching

- **master** : quite clear
- **develop**: development results before `merge` to `master`
<!-- - **latest** : all development will be done on this branch and a PR will be created to `develop` -->

### Git Concepts

- Use relevant *commit* messages and insert appropriate *tags*.
- [add] description of the file additions made
- [change] description of *update* made
- [style] description for additions or improvements to the *style* section
- [fix] description of the improvements made
- [refact] more optimized change description
</br>
- [Git Cheatsheet](https://www.git-tower.com/blog/git-cheat-sheet/)
- [Rewrite Commit History](https://git-scm.com/book/id/v2/Git-Tools-Rewriting-History)
- [Squash Published Commits](https://stackoverflow.com/questions/5667884/how-to-squash-commits-in-git-after-they-have-been-pushed)

#### Template Pull Request

```
## Explain what your PR does

## To which Ora's link' ticket is PR dedicated?

## How should one manually test this ticket?

## Deployment notes (migrations, envs, etc.)

## Screenshots (postman, feature, or anything related.)

## Others?
```
