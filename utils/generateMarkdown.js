// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function generateMarkdown(data) {

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string

  // TODO: Create a function to generate markdown for README
  return `
  # ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Data](#tests)
- [License](#license)
- [Author](#author)
- [Visuals](#visuals)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
![badge](https://img.shields.io/badge/license-${data.license}-important)
<br>
Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>

## Author
${data.author}, who can be reached at ${data.username}.

## Visuals
![Screenshot](${data.screenshot})
`;
}

module.exports = generateMarkdown;
