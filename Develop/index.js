const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',  
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use your project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who collaborated on your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license have you chosen for your project?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the scripts for running tests on your project?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
    },
    { 
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
    }


// function to initialize program
function init() {
    inquirer.prompt(questions).then((replies) => {
        writeToFile('Readme.md', generateMarkdown(replies));
    });
}

// function call to initialize program
init();


