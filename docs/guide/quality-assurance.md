# <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="40"> Guidelines in Quality Assurance

[Back to Home](en-README.md)

This section contains guidelines for conducting testing well, descriptions of documents, processes and agreements that apply to the Arch Public Website Dev.

---

### *Quality Assurance Workflow*

The current *Quality Assurance* flow is as follows:

1. Create a test document for each *user story* in the related sprint
2. Conduct PR Review and ensure the system built is in accordance with *acceptance criteria*
3. Build *E2E Automation Test* for every *user story* that has been entered into the *prod server*
4. Conduct Demo/UAT for each *user story* during *sprint review*
5. Create *Release Notes* for each *user story* / *bugfix* when releasing to the *production server*

---

### Document Test

Document Test are created using *Google Doc - Test Plan*.
Several things that need to be considered when creating test documents are:

- Make sure every *sprint* has 1 *test plan*. Each *test plan* will contain as many *test suites* as there are *user stories* in the related *sprint*. Each *test suite* will contain several *test cases* based on *acceptance criteria* and scenarios needed to address various conditions.
- Make sure the scenario created covers all conditions, including *positive case*, *negative case*, *corner case*. It would be better to consider one or more of the following *testing* techniques *Boundary Value Analysis*, *Equivalence Partitioning*, *Decision Table*, *State Transition Diagram*, or *Error Guessing*

---

### *Manual Test*

Manual tests are carried out based on the test document for the *testing* step by step guide.
Manual tests are carried out by the developer after carrying out a *Pull Request* and then confirmed by QA. Once confirmed, *Pull Request* will *merge* to the *staging server*. and QA will start to build *E2E Automation Test* on *staging server*

Before the *sprint* ends, QA will ensure that all work completed meets the conditions stated in the test document

---

### *E2E Automation Test*

*E2E Automation Test* was built using the *[CodeceptJS](https://codecept.io/)* framework.
Several things that need to be considered when creating an *E2E Automation Test* are:

- Make sure the *E2E Automation Test* that is built uses the *Behaviour Driven Development* format with *Gherkin Syntax*
- Ensure *E2E Automation Test* is built based on test documents and can be run repeatedly
- Before running *E2E Automation Test*, make sure the required data is available, if necessary, create *dummy* data first
- Apart from being based on test documents (per *sprint*), it is recommended to build *E2E Automation Tests* per module as well to make it easier to carry out *regression tests*

---

### *Bug Report Procedure*

Ketika tim QA menemukan bugs atau ada yang harus diimprove di dalam aplikasi, ada *standar report* yang harus diperhatikan:

*BUG*

- *Severity* : berisi level tingkatan resiko atau seberapa pengaruh bugs terhadap sistem
- *Priority* : berisi level prioritas bug untuk diperbaiki
- *Steps to Reproduce* : berisi step by step bagaimana mendapatkan bugs tersebut.
- *Actual Result* : berisi output dari step yang dijalankan.
- *Expected Result* : berisi output yang semestinya (yang benar)
- *Extra Information* : bisa berupa *screenshot* atau *credential* yang digunakan untuk testing

*IMPROVEMENT*

- *What to improve* : bagian apa saja yang harus di improve
- *How to improve* : menjelaskan bagaimana itu harus di improve

---
  
### *Review PR (Pull Request) Flow*

The role of the *Quality Assurance* team in *Pull Request* is to review new features or bugfixes as they should before merging them into develop or master. Several things that need to be considered in this *Pull Request* are:

- Make sure there is no *Conflict* in the *Pull Request*. If there is a *Conflict*, notify the relevant developer to immediately resolve the *Conflict*.
- Pipeline *Passed* (applies to all *Pull Requests*).
- If the pipeline *Failed* because of the *API test script*, check the *test script* again to see if it is still relevant or needs to be *updated*
- When using *Server Latest* for *testing pull requests*, make sure the relevant branch is at the top
- *Pull Request* can only be merged by the QA team after getting *Approval* from the assigned *QA* and *Captain* from the dev team appointed for *code review*
- When *merging* branches, make sure to check the *Close Source Branch* section

The *QA* team also has the right to carry out a *Decline Pull Request* with the following conditions:

- There are no *File Changes* in *Pull Request* (*File Changes 0*).
- *Duplicate Files*. If there are 2 PRs containing the same *file changes*, then one can be *Declined*. And make sure that there is an explanation of which *pull request* in *decline* is related to or the same as which *pull request*.
- The number of *file changes* is too large. There are provisions for a maximum number of *file changes* in 1 *Pull Request*.
 <!-- - *Web and IOS : +/- 50 file changes*
 - *Android : +/- 30 file changes* -->
- There is no *description* in *pull request*. At a minimum there must be a *Commit message*
- Before *decline*, communicate first with the developer concerned.

---

### *Release Notes*

*Release Notes* are created using *[Docs Release Notes](release-notes-VnZ2Q4m4iC)*.
Several things that need to be considered when making *Release Notes* are:

- Naming the title of *Release Notes* uses the format **[Platform Name] - Release [Release Date] (Version [Platform Version])**. For example: **CMS PBS - Release 1 July 2024 (Version 1.16.0)**
- The outline of *Release Notes* is as follows:
- [H1] What's new?
  - [H2] Module - Features 1
- [H2] What changed?
  - [H1] *Improvements*
    - [H2] *Improvements* Module 1 - Description *Improvements*
  - [H2] *Fixes*
    - [H1] *Fixes* Module 1 - Description *Fixes*
- Make sure to add *screenshot* images or gifs to explain the steps to run new features or other *improvements* features
- After the *Release Notes* have been created, make sure to provide information to the relevant *stakeholders* or share the *Release Notes* document via the Arch Public Website Dev *Google Chat Space* in the *Release Notes* thread

---
