# <img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="30"> Guidelines in Software Analyst

[Back to Home](en-README.md)

This section contains a description of the analysis documents on the Archipelago Public Website, processes and agreements that apply to the Archipelago Public Website.

---

### Document *Software Requirement Specifications*

Is a document resulting from an analysis of system requirements desired by the user. This document contains an outline of the system creation and initial assumptions provided. Creating this document can be done using *Google Drive Template* ( *New -> Google Docs -> From a template* )

Several things that need to be analyzed in this document are:

- A brief description of the system to be worked on, the purpose of creating the system and the initial assumptions provided
- The main features contained in the system
- Type of user in the system
- Technology that will be used in creating the system
- Database diagram (ERD) / *Class diagram*
- Explanation of system entities
- Bibliography / references

Insert the SRS document into the drive folder using the following name:

- *Parent Folder* : [PROJECT NAME] Software Analysis
- Folder name: SRS
- File name : SRS [Project Name] [Platform]

---

### Document *Product Backlog*

This is a document that translates the analysis into a brief description of the features that will be implemented (*user stories*). Creating this document can be done using *Google Drive Template* ( *New -> Google Sheets -> From a template* )

The *user stories* format used is
`As a <User Role>, I can <do something>` or can be abbreviated as `<User Role> can <do something>`.
> Example: Admin can create users, Customers can buy products, etc.

Insert the *Product Backlog* document into the drive folder using the following name:

- *Parent Folder* : [PROJECT NAME] Software Analysis
- Folder name: PRODUCT BACKLOGS
- File name: Product Backlog [Project Name] [Platform]

---

### Document *Tech Spec*

An abbreviation of *Technical Specification*, this document contains an explanation of each item in the *Product Backlog* in more detail in terms of technical aspects of implementation. This document was created to support the *sprint* that will be running. Creating this document can be done using *Google Drive Template* ( *New -> Google Docs -> From a template* )

Several things that need to be analyzed in this document are:

- Description and goal of *sprint*
- Goal *story*
- Data that will enter the system
- Data that will be issued by the system
- Workflow of *story* to be implemented
- Description of cases that allow *errors* to occur and their handling
- System validation
- Interaction with other systems (if any)
- Additional rules/restrictions to be aware of

Insert the *Tech Spec* document into the drive folder using the following name:

- *Parent Folder* : [PROJECT NAME] Software Analysis
- Folder name: TECH SPECS
- File name : Tech Spec [Project Name] [Platform]

---

### Document *Technical Test Specification*

This is a collaborative document between *Software Analyst* and *Quality Assurance*. This document combines *Tech Spec* with *Test Case* to obtain an efficient process without reducing the quality and information obtained in both documents. Creating this document can be done using *Google Drive Template* ( *New -> Google Sheets -> From a template* )

*Technical Test Spec* is created for projects that are commonly carried out and do not have a special level of difficulty.

In this document there is a *Tech Spec sheet* which will be filled in by the *Software Analyst*.

Insert the *Tech Spec* document into the drive folder using the following name:

- *Parent Folder* : [PROJECT NAME] QUALITY
- Folder name: Technical Tech Spec
- File name: TTS [Project Name] [Platform]

---

### Document *Tech Doc*

An abbreviation for *Technical Documentation*, this document contains a technical description of the system that has been implemented. Creating this document can be done using *Google Drive Template* ( *New -> Google Docs -> From a template* )

Some things that need to be explained in this document are:

- Description & Purpose of the module that has been created
- Description & purpose of *user story* in the related module
- Processes running in *story* are related and equipped with process diagrams
- Displays related to the processes that have been described and interactions contained in the display
- The database used in the associated *story* implementation
- Implemented *error* messages and combinations

Insert the *Tech Doc* document into the drive folder using the following name:

- *Parent Folder* : [PROJECT NAME] Software Analysis
- Folder name: TECH DOCS
- File name : Tech Doc [Project Name] [Platform]

---
