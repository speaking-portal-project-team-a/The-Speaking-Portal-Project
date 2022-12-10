# Scripts

There are currently 5 scripts available within this package - each one serves a unique purpose, and will be explored in
further detail below.

## `npm run start:dev`
Starts the application in development via Nodemon
## `npm run build`
Builds the app at build, cleaning the folder first.
## `npm run start`
Starts the app in production by first building the project with npm run build, and then executing the compiled 
JavaScript at build/api.js.
## `npm run test`
Once tests are built into the project, this script will run tests. Currently, it is not in use.
## `npm run lint`
This runs prettier & eslint in order to ensure our code is consistently styled
## `npm run format`
This runs prettier & eslint with the added bonus of fixing any styling errors that are encountered

# Linting
Linting is only applied to typescript files, so please ensure you are formatting them correctly!

Linting is run via eslint, which is hooked into prettier. You can set up linting such that when you save your files, 
linting is automatically run and fixes any formatting errors that it is able to. To do this, follow the instructions for
setup for your specific editor.
[eslint integration instructions](https://eslint.org/docs/latest/user-guide/integrations)

**Husky is enabled and runs before each commit, so linting must be done**