# <img src="https://emojis.slackmojis.com/emojis/images/1588315024/8823/hyperkitty.gif?1588315024" width="30" /> Panduan untuk *End to End (E2E) Automation Test Developer*

[Back to Home](en-README.md)

This section contains guidelines for creating code, using *third party tools*, an explanation of the flow or architecture and libraries that exist and/or are used in creating *end to end automation tests* on the Arch Public Website Dev.

---
---

## E2E Automation Test: Standard flow and architecture for creating *e2e automation tests*

*End to end (e2e) testing* is a testing technique to ensure that the system runs according to a predetermined path from start to finish on the Arch Public Website Dev. *E2E Testing* has four main flows divided into planning, designing, implementing and analyzing results.

![](https://i.imgur.com/98gApwl.png)

### Planning

Planning is the flow stage of determining and dividing tasks, schedules and resources that will be used to test the system/module/feature/update/improvement that will be carried out.

**Enter**:
PRD documents, SRS, and other forms of documentation that can explain the system/module/feature/update/improvement that will be carried out.

**Output**:
**Ora Story/Bug Card** (*Description, figma, & acceptance criteria included*)

### Planning

Design is the flow stage of determining test specifications, creating test cases (*test cases*), risk analysis, usage analysis, and testing scheduling for each story/bug card Ora that has been determined.

**Enter**:
**Ora Story/Bug Card** (*Description, figma, & acceptance criteria included*)

**Output**:
**Test Plan** (*includes test cases*)

### Application

Implementation is the flow stage for executing *test cases* that have been designed and planned in the *test plan*, conducting demos and documenting the results.

**Enter**:
**Test Plan** (*includes test cases*)

**Output**:
**Test Plan Progress Report** and demo feedback list

### Results Analysis

Results analysis is a flow stage for analyzing test results, evaluating tests, carrying out additional testing if necessary, issuing *release notes* and tidying up the *test plan* document for the next development or maintenance (iteration).

**Enter**:
**Test Plan Progress Report** and demo feedback list

**Output**:
**Release Notes** and *evaluation report*

---

The implementation of *e2e testing* technically applies both *functional* and *non-functional* approaches. Each approach has a list of recommended techniques/tests that can be used to meet service requirements.

### Functional

Engineering/testing list:

- Unit testing
- Integration tests
- Smoke testing
- Sanity testing
- Regression testing
- Exploratory testing
- User acceptance testing

### Not Functional

Engineering/testing list:

- Load testing
- Performance testing
- Stress test
- Security testing
- Accessibility testing

To get maximum *test coverage* it is recommended to apply all the techniques listed above in every (iteration) of development haha ​​:D.

---

The implementation of *e2e test* in its execution applies a *manual* and *automation* approach sequentially. Before implementing an *automation* approach, developers are expected to ensure that every component in the *manual* approach has been implemented, completed, or agreed upon.

### Instruction

Components of a *manual* approach that need to be implemented and ensure that the approach exists or is agreed upon:

- Test Driven Development/Test Planning
- Test Cases and Scenarios
- Reporting
- Compatibility
- Verification and Validation

### Automation

Components of an *automation* approach that need to be implemented:

- Backend Automation
- Front End Automation
- Mobile Automation (if required)

Each *platform* on the Arch Public Website has different needs and system base/*tools* so by default the implementation of *e2e testing* will be more detailed in the guide which has been divided by *platform*.

---
---

## E2E AT Tools : Daftar *tools* yang digunakan untuk pengembangan

- *[CodeceptJS](https://codecept.io/)* (Backend/Frontend Automation)
- *[Monika](https://monika.hyperjump.tech/)* (Monitoring/Trigger)
- *[BetterUptime](https://betterstack.com/better-uptime)* (Monitoring)
- *[TestProjectIO](https://testproject.io/)* (E2E Automation)

---
---
