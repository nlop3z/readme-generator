// function to generate markdown for README
function generateMarkdown(data) {
  let badge = data.license.replace(/ /g,'');
  return `# ${data.title} ![GitHub license](https://img.shields.io/badge/license-${badge}-blue.svg)
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
GitHub: [${data.userName}](https://github.com/${data.userName})

Contact: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
