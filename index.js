// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
// TODO: Create an array of questions for user input
const questions = [
  {
    type: `input`,
    message: `What is the title of your project?`,
    name: `title`,
  },
  {
    type: `input`,
    message: `Write a description of your project.`,
    name: `description`,
  },
  {
    type: `input`,
    message: `What are the installation instructions for your project?`,
    name: `installation`,
  },
  {
    type: `input`,
    message: `What is the usage information for your project?`,
    name: `usage`,
  },
  {
    type: `input`,
    message: `What are the contribution guidelines for your project?`,
    name: `contribution`,
  },
  {
    type: `input`,
    message: `What are the testing instructions for your project?`,
    name: `testing`,
  },
  {
    type: `list`,
    message: `Select a license:`,
    name: `license`,
    choices: licenses,
  },
  {
    type: `input`,
    message: `What is your GitHub username?`,
    name: `github`,
  },
  {
    type: `input`,
    message: `What is your email address?`,
    name: `email`,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
