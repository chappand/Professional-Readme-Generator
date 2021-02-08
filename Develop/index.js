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
    {
      type: 'input',
      name: 'usage',
      message: 'Please add instrusctions for usage here.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Describe you contributing guidelines here.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter instructions for testing here.',
    },
    {
        type: 'input',
        name: 'githubUN',
        message: 'What is your GitHun username?',
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'What is the link to your GitHub?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
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

${userInput.usage}

## License

## Contributing

${userInput.contributing}

## Tests

${userInput.tests}

## Questions

Here is the link to my GitHub: [${userInput.githubUN}](${userInput.githubLink})

If you have any further questions, please reach out to me via email at: ${userInput.email}`;

// Function call to initialize app
promptUser()
  .then((userInput) => fs.writeFile('README.md', generateReadme(userInput), (err) => {
      if (err) {
      console.log("There was an error, please try again!");
    } else {
        console.log('Successfully created Readme!');
    }
    }));
