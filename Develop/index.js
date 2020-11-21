const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your username?',
    }
    { 
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFileSync(path.join(process.cddw(),filename), data);
    }


// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
    }

}

// function call to initialize program
init();


