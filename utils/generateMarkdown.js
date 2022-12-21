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
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Visuals](#visuals)

## Description
${data.description}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${data.license}

## Author
${data.author}

## Visuals
![Screenshot](${data.screenshot})
`
}

module.exports = generateMarkdown;
