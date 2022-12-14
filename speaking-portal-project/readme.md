# Local Scripts

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

# Docker scripts:

Using the dockerfile, we can now run our API via Docker! 

**Note: Do not use docker for development. It will be very annoying. It is used mainly to test how the system will act
hosted.**

The steps to take are as follows:
1. Install the linux version of rhubarb
2. [Ensure docker is installed and running on your local machine](https://www.docker.com/get-started/)
3. Run the following command to build the image: `docker build . -t <your name>/speaking-portal-project`
4. Run the following command to run the image (in detatched mode, so you can run additional commands.)
`docker run -p 3000:3000 -d <your username>/speaking-portal-project` (Note: You can adjust the ports as required)
5. Make requests to the container using Postman. You can send requests to the url [0.0.0.0:3000](0.0.0.0:3000) 
for both local & docker instances.

# Linting
Linting is only applied to typescript files, so please ensure you are formatting them correctly!

Linting is run via eslint, which is hooked into prettier. You can set up linting such that when you save your files, 
linting is automatically run and fixes any formatting errors that it is able to. To do this, follow the instructions for
setup for your specific editor.
[eslint integration instructions](https://eslint.org/docs/latest/user-guide/integrations)

**Husky is enabled and runs before each commit, so linting must be done**