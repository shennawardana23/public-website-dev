# <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50">  Guidelines and Basic Concepts of Programming

[Back to Home](en-README.md)

This section contains a summary and basic references for programming for Arch Public Website Developer.

---

### Clean Code

The concept of *Clean Code* has several interpretations and characteristics, including:

- **The code must be easy to understand**
- Have a clear and consistent workflow/data exchange
- Collaboration between *classes* or files must be easy to understand
- The responsibilities and functions of each file must be easy to understand. Don't create functions that are too complex if they are not needed.
- The functions or *methods* contained in a file must be easy to understand
- The purpose, naming and function of each variable or line is easy to understand and easy to read
- The code must be easy to read, add comments in parts that are quite complex or less stable (see the *readable code* section)

- **The code must be easy to change**
- Classes and functions must be kept small and responsible for a particular job (*single responsibility principle*)
- Classes should have a clear API and be easy to understand / easy to read
- Classes and their functions must work as they should and the processes within them are easy to predict
- Has a *unit test* or is arranged in such a way as to make it easier to create tests.
- The available tests are easy to understand and easy to change
- Code redundancy must be kept to a minimum (*DRY principle*) so that the code can continue to run consistently when changes occur somewhere
- Dependencies in the code must be kept to a minimum to reduce the risk of errors due to changing dependencies

> "Clean Code is a code that is written by someone who cares" - **Michael Feathers**

Read more:

[Clean Code : A Handbook of Agile Software Craftsmanship](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

[High Quality Code for Better Programmers](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

---

### Readable Code Concept

What developers quite often forget is that the code they develop will be reused someday, perhaps by someone else. Many cases arise when old code is reopened, it takes time to understand or remember how the code was created. This time can be minimized if the code is easy to read and understand.

The principles for creating easy-to-read code are:

- Consistency in code creation procedures, including:
- Spaces vs tabs
- Placement { }
- Follow the agreements that apply within the team
- Consistent naming of *files & folders*:
- Place files in *folders* that are relevant and easy to understand
- Naming conventions (CamelCase, snake-case, etc)
- Follow the agreements that apply within the team
- Insert comments and documentation in places that require additional explanation
- Avoid creating functions/lines that are complex and require additional time to understand.
- Avoid spaces / tabs that are too indented (*deep nesting*) because it will make it difficult to understand the function and purpose of the code

> "Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live. Code for readability" - **John F Woods**

Read more:

[The Art of Readable Code](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

[Write Elegant Code](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

[Write Cleaner Code](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

---

### SOLID, KISS & DRY

#### SOLID

- **Single responsibility** : *Class* can only have 1 responsibility. Don't create *classes* that are too complicated and do too many things at once.

> **Example**: an online motorcycle taxi service might create a `Shuttle' class to model its business processes. However, it would be better if the class was split into`Delivery` which is responsible for taking the user to their destination and `Pick Up` which is responsible for the function of picking up the user from the place of origin so that if there is any optimization in the `Pickup` process, a function that implements the `Delivery' class `` to be relatively safer

- **Open for extension but closed for modification**: Functions or uses within an entity must be able to be added without having to change the entity's content (*Open Closed*)

> Example: `Truck` has a `number of ItemVolume` function which has a *List* parameter of items in `Truck`. The `sumVolumeItems` function is responsible for calculating the volume of each item and then adding up the total volume. If there is a new item type with a new volume formula, then `ItemVolume count` must be updated. There should be a `calculateVolume` implementation on the items so that for any item type, `countVolumeItem` does not need to be updated as it will simply sum the results of `item.calculateVolume()`

- **Liskov substitution principle** : An *object* must be able to be replaced by an *object subtype* without changing the program output ( *Design by Contract* )

> Example: function `between Passengers` has parameter *Vehicle* which has function `brake`. *Liskov Substitution* states that all types of *vehicles* (`Odong Odong`, `Bemo`) must apply `brakes` for the same purpose (reducing speed).

- **Interface separation principle** : A specific and small *Interface* is better than a large *Interface* that causes *classes* to have to implement unnecessary functions.

- **Dependency inversion principle** : Details must depend on the abstraction. There should be no *class* that depends / *depends* on a concrete *class* ( *non abstract* )

> **Example** : The `passenger' function in the`Deliver' class may have a `Motorcycle` parameter/dependency. However, if an online motorcycle taxi service wants to add 'Bemo' to its fleet, of course it has to change the contents of 'Bemo'. It is recommended that the parameter from `between Passengers` be changed to `Vehicle` (*abstract*) so that you can add fleet types without having to change the related function/class.
>

---

#### KISS (Keep It Simple and Straightforward)

The KISS concept states that the code created must be simple and easy to understand without sacrificing the quality of the final code output.

Several things that must be considered when implementing the KISS concept are:

- *methods & classes* should be kept as simple as possible.
- Avoid complexity in looping and branching conditions (*nested/complex loop & conditional*)
- Avoid solutions that are too complicated or code that is too short but difficult to read. Don't sacrifice performance for easy-to-read lines of code. Find a balance between the two.

---

#### DRY (Don't Repeat Yourself)

Emphasizes on eliminating unnecessary code duplication in software development projects. According to this principle, any knowledge or logic must have a single canonical representation in the system.

Let's explore the benefits offered by the DRY principle.

- **Complexity Reduction**
First and foremost, this principle reduces code complexity by avoiding unnecessary repetition. This makes the code more readable, clear, and easy for developers to understand. Additionally, it simplifies code maintenance, as modifications and fixes only need to be done in one place, rather than in several parts of the code.

- **Duplicate Code Removal**
To avoid code duplication, there are several techniques developers can implement. First, extracting functions or methods allows grouping similar, repetitive blocks of code into reusable functions. This way, the same code can be called in multiple places without needing to rewrite it.

- **Grouping by Function**
The use of classes and inheritance can help encapsulate common functions and reuse them in specific subclasses.

- **Code Reuse**
Lastly, the use of modules or frameworks can help in reusing code that has already been written and tested by other developers, thereby eliminating the need to start from scratch.

> **Example** : Suppose we are developing a contact management application with features for adding, changing, and deleting contacts. Rather than repeating the same data validation code in several places in the program, we can extract this validation logic into a separate function or utility class. This way, every time we need to validate contact data, we simply call that function or utility class, avoiding code duplication.

By applying DRY principles, we reduce complexity, increase maintainability, and encourage code reuse, resulting in more efficient development and more robust systems.

---

#### YAGNI (You Ain’t Gonna Need It)

The YAGNI (You Ain't Gonna Need It) principle emphasizes not implementing features or code that are not immediately needed. According to this principle, it is better to focus on the features that matter and avoid anticipating hypothetical future needs.

- **Convention over Configuration** (CoC)
The Convention over Configuration (CoC) principle encourages the use of pre-defined conventions, rather than explicit configurations.

-**Composition over Inheritance**
The Composition over Inheritance principle advocates using class composition instead of inheritance to encourage code reuse and avoid rigid dependencies between classes or building complex objects by combining simpler objects rather than creating complex inheritance hierarchies.

-**Law of Demeter (LoD/Principle of Only Talking to Your Closest Friends)**
Software design principles that encourage separation and reduce dependencies between classes.

Read more:

[SOLID : Object Oriented Design](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

[SOLID, GRASP and other principles of OOP](https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP)

---

#### Unit Test (Test Driven Development)

- **The Three Laws of TDD**
By now everyone knows that TDD requires us to write unit tests first before writing production code. However, these regulations are just the tip of the iceberg. Pay attention to the following three laws:
First Law You should not write production code until you have written unit tests that fail.
Second Law You should never write more than enough unit tests to fail, and don't
failed to stack.
Third Law You should never write more than enough production code to pass a test that is currently failing.
- **FIRST.**
A clean test follows the five other rules that make up the acronym above:

> **Fast** Tests must be fast. Tests should run quickly. If a test is slow, you won't run it often. If you don't run it often, you won't catch problems early enough to fix them easily. You won't feel free to clean up the code. Eventually the code will start to rot.

> **Independent** Tests should not depend on each other. One test does not necessarily determine the conditions for the next test. You should be able to run each test independently and run the tests in any order you want. When tests depend on each other, failure on the first test will lead to a series of failures on subsequent tests, complicating diagnosis and hiding defects in subsequent tests.

> **Repeatable** Tests must be repeatable in any environment. You should be able to run tests in a production environment, in a QA environment, and on your laptop on the way home without a network. If your tests are not repeatable in any environment, you will always have a reason why they failed. You will also find yourself unable to run tests when the environment is not available.

> **Self Validation** Tests must have a boolean output. Either they pass or fail. You
You don't need to read the log file to know whether the test passed or not. You don't need to manually compare two different text files to find out whether the test passes or not. If the test is not self-validating, then failure can be subjective and running the test requires lengthy manual evaluation.

> **Timely** Tests must be written on time. Unit tests should be written right before the production code that makes them pass. If you write tests after production code, you may find the production code difficult to test. You may decide that some production code is too difficult to test. You probably didn't design your production code to be testable.

---

### OOP concept

Some of the main concepts that must be understood from the OOP (*Object Oriented Programming*) paradigm are:

**Everything is an object**

Many people say that in OOP, everything can be represented as an `Object`. It may or may not be applied in certain situations/concepts ( *primitive variables*, *methods*, etc). However, it needs to be understood that in solution modeling, almost all problems and solutions can be represented as a collection of interacting objects. Therefore, the ability to model problems into objects and their representation is very important in understanding OOP.

**Encapsulation**

Encapsulation states that the internal implementation/representation of an object must not be visible from other objects.

Encapsulation can be done by restricting access to *accessors* and *mutators*. ***Accessor*** is a function that can provide values ​​contained in an object. ***Mutator*** is a function that can change the internal representation/value contained in an object.

> **Example**: a `Person` object can have an *Accessor* `getClothes()` and a *Mutator* `setClothes(...)` to find out and change the clothes it is wearing

**Abstraction**

Abstraction is closely related to encapsulation, because basically abstraction is the process of creating an object that has no real implementation in its *Accessor* or *Mutator*. This implementation will be applied to the object that represents it

> **Example**: a `Human` object has a `canRead` *Accessor*, but the implementation of `canRead` will differ depending on what other objects represent `Human`. Budi may `can read` (return `true`) but Joko may not `can read` (return `false`)

**Inheritance**

In general, objects can interact with each other in the relationships of have (*has a*), use (*uses a*), or represent (*is a*). *Is a* or representation a form of *Interitance* or inheritance. In the concept of *Inheritance* there are the terms *parent/super class* and *child class*. *Derived classes* will inherit non-private properties and functions owned by the *parent/super class*.

> **Example** : The `Vehicle` class has a `wheel` property and a `setSpeed` function. All classes that are *derived classes* from `Vehicle` will have `wheel` and `setSpeed` functions automatically.

**Polymorphism**

*Polymorphism* can be described or interpreted as an operation that has several types of implementation

Some types of *Polymorphism* are:

- *Ad Hoc Polymorphism* or *Function Overloading* is a function that has the same name, but different parameters so it can have different implementations

> Example: a function with `sum` can have parameters `Arabic numerals (1-0)` or `Roman numerals (I-X)` so the implementation of `sum(10, 20)` will of course be different from `sum(XV, IV )`

- *Parametric Polymorphism* or *Generic Type* is a function or data type that is written generally so that it can accommodate all types of data types without exception

> Example: class `Drink<T>` and function `mixDrink(T)` have a *Generic Type* represented in `T`. In the process of representing `Drinks`, `T` can be defined as any data type (e.g. `Coffee` or `Tea`) and `racikDrinks` must use the same data type as a parameter (being `racikDrinks(Coffee)` or `RasikDrinks ( Tea)`.

- *Subtyping* or *Function Overriding* is a function that is inherited from a *parent class* but can be defined differently by a *child class*

> Example: the class `Animal` has a `talk` function, but the class representing `Animal` may have a different way of `talk` (e.g. `Cat` `talk` will return *Meow!* and `Dog` `talk` will back *Woof!* )

Read more:

[Design Pattern Guide](https://www.udemy.com/draft/725258/learn/v4/content)

[OOP on Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)

---

### Konsep Reactive Programming

Some of the main concepts that must be understood from the *Reactive Programming* paradigm are:

**Everything is a flow**

Slightly different from the OOP concept which describes problems and solutions as objects and their interactions, *Reactive Programming* focuses on events and event flows (*flow & events*). Most processes can be described in terms of a collection of events (*event*) and a flow of events from start to finish (*flow*)

Because of this difference in paradigm, *Reactive Programming* is very suitable when applied to systems that require instant / *real time* responses because this paradigm is very focused on events (*event*) and reactions (*response*).

**Subject / Observable**

*Stream* can be implemented by initializing *Subject* (can also be called *Observable*). *Observable* is an object/data that can be monitored (*observed/subscribed*) by the *Observer*. Any changes in data status will be immediately informed to all *Observers* who monitor *Observable* data.

**Observer**

*Observer* is an object/data that monitors all changes to *Subject/Observable* values. After the *Observer* declares itself ready to monitor (*subscribe*) the *Observable*, the *Observer* has entered the *data flow* which is currently in process. Every time there is a change in the internal status of the *Subject/Observable*, the *Observer* will receive a notification so that it can react according to its actions.

Read more:

[Reactive Programming Introduction](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

[ReactiveX](http://reactivex.io/)

---
