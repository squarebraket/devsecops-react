# Unit Testing Best Practices
Unit Testing is a very important software development practice. We try in this guide to proven best practices that will help the developer when working on application code.

## General Testing Practices

### Simplicity
Testing code should design to be simple. Test only as much as needed. **Don't strive for 100% coverage**

### Name testing code properly
A Test report should indicate if the current application revision satisfies the requirements to people not necessarily familiar with the code.
With this goal in mind, do the following:
- Clearly indicate what is being tested: `ProductsService.addNewProduct` method
- Explain the scenario being tested: *"No price is passed to the method"*
- Indicate what's expected: should return *"Product not approved"*

### Structure test code by the *AAA* pattern
Within each unit-test method/function code do the following: 
- 1st A: Arrange together setup code for test scenario i.e. adding data to the DB, create mocks, etc.
- 2nd A: Arrange together execution code
- 3rd A: Arrange together all assertions 

### Describe test expectations in business language using BDD style assertions
Coding your tests in a declarative style allows the reader to understand the objective of the test easily. Using BDD style `expect` and `should` assertions (human-like language) in your code achieves that goal. 

### Test only public methods/functions
Whenever a public behavior is checked, the private implementation is implicitly tested.

### Use realistic test data
The more realistic the test input is, the greater the chances are to catch bugs early.

### Test data should independent for each test
Each test should add and act on its own set of data to prevent test coupling. 

### Don't Catch errors, expect them
Tests code should verify that exceptions are thrown as it's appropriate.

### Group test in sets
Use tagging or other methods of grouping tests so that they can be executed only in the appropriate context or when needed.

### Use a linter to check for errors
To avoid coding mistakes, use a popular linting library to check your unit-test code 

## General UI Testing Practices

### Use element attributes unlikely to change for querying
Query HTML elements based on attributes that are likely to survive changes unlike CSS selectors, labels and the like.

### Use framework built-in support for async calls
Don't use `setTimeOut`, etc., to wait for calls to complete but, instead the mechanism prescribed by the testing framework you're using.

### Test fully rendered components, when possible 
Fully rendered components that can instantiated in isolation to test them. Complex components can be difficult to fully instantiate for testing yielding erroneous results.  

### Have few e2e test that span the whole system
e2e tests are brittle and slow. Have only a small set of essential e2e tests that can serve as "smoke tests". 


## React Testing Practices

### Stick with the community's recommendations
It the latest version of React, the documentation recommends the use of `Jest` and `Testing-Library`, stick for these for better community support.

### Clean up after each test
Teardown any artifact, environment, etc., created for each test after it completes. Use the `aferEach` method for clean up code.

### Keep object types separate from each other
Keep display/UI code separate from probram logic and side-effects. This will make it easier to write tests for each category of components.

### Mimic user interaction when testing components
You should test your components functionality from user's perspective. This will give you the confidence the app will function as intended.

### Test only user functionality
Don't test superfluous details, focus your testing efforts in testing business functionality.

### Use shallow rendering for unit-testing
Shalow rendering only renders the component being tested, this allows to test the component in isolation.

## Sources:
Most of the concepts in this guide were derived from the following sources:
- [Javascript Testing Best Pracitces](https://github.com/goldbergyoni/javascript-testing-best-practices/)
- [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)
- [Modern React Testing](https://blog.sapegin.me/all/react-testing-1-best-practices/)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Unit-testing React Components](https://medium.com/javascript-scene/unit-testing-react-components-aeda9a44aae2)
- [How to test React components: the complete guide](https://www.freecodecamp.org/news/testing-react-hooks/)
