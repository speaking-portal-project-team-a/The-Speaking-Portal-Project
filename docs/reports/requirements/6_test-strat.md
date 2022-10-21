# Test Strategy

## Unit Testing

Unit tests will be built for each newly developed feature. Test scripts will be built and run using the Jest framework for Node.js and TypeScript. Within each testing script, features will be broken down and tested accordingly. As of right now the plan is to have all unit testing scripts added into a single testing directory, although script organization may change as the project develops. 

## Continuous Integration

Continuous integration will be implemented using the CI/CD GitHub workflows. These workflows will be built to run tests and builds in a Node.Js environment. Initial CI testing will be focused on testing Node.Js package builds and will be ensuring all new package dependencies are accounted for in new code changes. These workflows will be triggered during each new pull request. If the tests fail, then the PR will need to be re-polished. If these tests pass, then new code can be merged into our repository. We may be integrating a framework called ‘SonarCloud’ which performs automated testing and code checking, although this software may require a fee. Continuous integration workflows will be frequently updated to ensure testing scripts are up-to-date.

## API Testing

This project also requires an API build which will require separate testing to ensure that our product integrates with the client’s system. Postman will be the framework used to build and run tests for our API. This framework allows mock client requests to be made directly to our API, and it ensures that our API is delivering contents correctly.
