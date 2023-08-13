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
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is youre email address?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter why you built this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What problems does your project solve?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter what problems your project solves!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for you project.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter installation instructions for you project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use you application.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter instructions on how to use you application!');
                return false;
            }
        }
    },

    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}
// Function call to initialize app
init();
