// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// 
const questions = [
    {
        name: 'title',
        message: 'What is the name of the application?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Please describe this application:',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'How do I install this application?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How do I use this application?',
        type: 'input'
    },
    {
        name: 'contributing',
        message: 'How do I contribute to this application?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'How can I test application?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Which license do you wish to use?',
        type: 'list',
        // Choices taken from Github
        choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause 'Simplified' license", "BSD 3-cluase 'New' or 'Revised' license", "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
    },
    {
        name: 'author',
        message: 'Who wrote this application?',
        type: 'input'
    },
    {
        name: 'screenshot',
        message: 'What is the path to your screenshot?',
        type: 'input'
    },
    {
        name: 'username',
        message: 'Please provide your github login email:',
        type: 'input'
    },
];

function init() {
    inquirer.prompt(questions).then(function (userInput) {

        const newMarkdown = generateMarkdown(userInput)

        // TODO: Create a function to write README file
        fs.writeFile('README.md', newMarkdown, function (err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Congrats on your new README!')
            }
        })
    },

    )
}

// Function call to initialize app
init();
