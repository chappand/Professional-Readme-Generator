// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What would you like your readme title to be?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your application here.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please describe the installation process here.',
    },
    // {
    //   type: 'input',
    //   name: 'food',
    //   message: 'What is your favorite food?',
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Enter your GitHub Username',
    // },
    // {
    //   type: 'input',
    //   name: 'linkedin',
    //   message: 'Enter your LinkedIn URL.',
    // },
  ]);


// TODO: Create a function to write README file
const generateReadme = (userInput) =>
`# ${userInput.title}

## Description

${userInput.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${userInput.installation}

## Usage

## Licesne

## Contributing

## Tests

## Questions`;

// Function call to initialize app
promptUser()
  .then((userInput) => fs.writeFile('README.md', generateReadme(userInput), () => console.log("There was an error, please try again!")))
  .then(() => console.log('Successfully created Readme!'))

