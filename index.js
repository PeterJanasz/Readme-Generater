// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is youre email address?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',

    },
    {
        type: 'input',
        name: 'what',
        message: 'What problems does your project solve?',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for you project.',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use you application.',

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(readmeData => {writeToFile('README.md', generateMarkdown(readmeData))}) 
        .catch(error => {
            if(error){
                throw error
            }
        })
}
// Function call to initialize app
init();
