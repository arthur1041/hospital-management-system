

# Application Documentation

Hospital management system developed using ReactJs

## Setting application up
### Required tools to run the application
1. [NodeJs](https://nodejs.org/en/download/)
2. [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor)

### Running the application
Once you've installe the necessary tools, you need to do the following to get the project running:
1. With command prompt on at the project path, run `npm install` to install all the dependencies.
2. After installing the dependencies, run `npm start` in order to start the application, and it will open at port 3000.

### Running the tests
The unit tests were written using the `Jest` library, once you ran `npm install`, it will also be installed and you can run tests with the `npm test` command specifying the path of the test file that you want to run. For example: `npm test src\helpers\helper-functions.test.ts`