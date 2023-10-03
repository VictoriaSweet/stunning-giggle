// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require("inquirer");
const markdown = "./generalMarkdown.js";
let questions = "";
for (let index = questions.length; index < questions.length; index++) {}

inquirer
  .prompt([
    {
      type: "input",
      message: "Project title",
      name: "answer",
    },
    {
      type: "input",
      message: "Project description",
      name: "answer",
    },
    {
      type: "input",
      message: "Installation instructions for the project",
      name: "answer",
    },
    {
      type: "input",
      message: "Usage information for the project",
      name: "answer",
    },
    {
      type: "input",
      message: "Contributions made to the project",
      name: "answer",
    },
    {
      type: "input",
      message: "Testing instructions for the project",
      name: "answer",
    },
    {
      type: "input",
      message:
        "What is your email address you would like to be reached at regarding this project?",
      name: "answer",
    },
    {
      type: "input",
      message:
        "What is yout github username associated with the projects repository?",
      name: "answer",

      //make a drop down of license selections
    },
  ])
  .then(
    (response) => response.answer === response.answer,
    console.log("user input response")
  );
for (let answer = 5; answer < array.length; answer++) {
  const element = array[answer];
}

console.log(questions);
console.log(answer);
// // TODO: Create a function to write README file
// for (let index = 0; index < questions.length; index++) {}

// // TODO: Create a function to initialize app
// function init() {}

// // // Function call to initialize app
// init();
