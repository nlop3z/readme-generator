// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
## Tests
${data.test}
## Questions
${data.userName}
[${data.userName}](https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
