// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `None`) {
    return `![${license} license badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== `None`) {
    return `[${license} license](https://choosealicense.com/licenses/${license})`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== `None`) {
    return `This project is under the `;
  } else {
    return `This project is not using a license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseDescription = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  -----

  ## Table of Contents
  [Installation](#installation)
  [How to Use](#usage)
  [License](#license)
  [Contributions](#contributions)
  [Testing](#testing)
  [Questions](#questions)

  -----

  ## Installation
  ${data.installation}

  -----

  ## How to Use
  ${data.usage}

  -----

  ## License
  ${data.license}
  ${licenseLink}
  ${licenseDescription}

  -----

  ## Contributions
  ${data.contribution}

  -----

  ## Testing
  ${data.testing}

  -----

  ## Questions
  [GitHub](https://www.github.com/${data.github})
  [Email] ${data.email}
`;
}

module.exports = generateMarkdown;
